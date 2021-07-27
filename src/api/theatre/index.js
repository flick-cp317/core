import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';

const theatreRouter = Router();

// test API call
theatreRouter.get('/', auth, async (req, res) => {
    res.status(200).json({});
    return;
});

// responds with the name of a specific theatre
theatreRouter.get('/:theatreid/name/', auth, async (req, res) => {
    const { theatreid } = req.params;

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/theatre/getTheatre.sql',
        'utf-8',
    );
    requestArray = [ theatreid ];

    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error) {
        res.status(400).json({});
        return;
    }

    if (result.rows[0] === undefined) {
        res.status(400).json({});
        return;
    }

    res.status(200).json(result.rows[0].theatrename);

    return;
});

//responds with an array of theatres the user is in and userid
theatreRouter.get('/user/:userid/', auth, async (req, res) => {
    const {userid} = req.params;
    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/theatre/getUserTheatres.sql',
        'utf-8',
    );

    requestArray = [ userid ];
    
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error) {
        res.status(400).json({});
        return;
    }

    //code to create array for returning list of theatres
    let response = {
        userid: userid,
        theatres: []
    };

    for (let i = 0; i < result.rows.length; i += 1) {
        response.theatres.push(result.rows[i].theatreid);
    }

    res.status(200).json(response);

    return;
});

theatreRouter.post('/new/', auth, async (req, res) => {
    try {
        const userid = req.user.id;
        const { theatreName } = req.body;
        
        if (theatreName === undefined) {
            res.status(400).json({});
            return;
        }
    
        let sql, requestArray, result;
    
        sql = await promises.readFile(
            './src/db/sql/theatre/addTheatre.sql',
            'utf-8',
        );
        requestArray = [ theatreName ];
        result = await pool.query(sql, requestArray);
    
        const theatreid = result.rows[0].theatreid;
    
        sql = await promises.readFile(
            './src/db/sql/theatre/addUserToTheatre.sql',
            'utf-8',
        );
    
        requestArray = [ theatreid, userid ];
        result = await pool.query(sql, requestArray);
    
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({});
    }
});

// return the list of theatre members in the desired theatre
theatreRouter.get('/:theatreid/members/', auth, async (req, res) => {
    
    const { theatreid } = req.params;

    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/theatre/getTheatreMembers.sql',
        'utf-8',
    );
    requestArray = [ theatreid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
        return;
    }

    if (result.rows[0] === undefined){
        res.status(400).json({});
        return;
    }

    let response = {
        theatreid: theatreid,
        users: []
    };

    for (let i = 0; i < result.rows.length; i += 1) {
        response.users.push(result.rows[i].userid);
    }

    res.status(200).json({ members: response.users });
    return;

});

// add a user to the desired theatre id
theatreRouter.post('/:theatreid/add/', auth, async (req, res) => {
    const {user} = req.body
    const {theatreid} = req.params

    // user parameter is empty
    if (user === undefined){
        res.status(400).json({});
        return;
    }

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/user/getUserFromUsername.sql',
        'utf-8',
    );
    requestArray = [ user ];
    result = await pool.query(sql, requestArray);
    
    // if the user does not exist, send a 400
    if (result.rows[0] === undefined){
        res.status(400).json({});
        return;
    }

    const userid = result.rows[0].userid

    sql = await promises.readFile(
        './src/db/sql/theatre/getTheatreMember.sql',
        'utf-8',
    );
    requestArray = [ theatreid, userid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
        return;
    }
    
    // user is already in the theatre
    if (result.rows[0] !== undefined){
        res.status(400).json({});
        return;
    }

    sql = await promises.readFile(
        './src/db/sql/theatre/addUserToTheatre.sql',
        'utf-8',
    );
    requestArray = [ theatreid, userid ];
    try{
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
        return;
    }

    res.status(200).json({});
    return;
});

export default theatreRouter;
