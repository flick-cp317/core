import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';
import { NotificationType } from '../../notificationTypes';
import { addNotification } from '../notification/addNotification';

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

// add a new theatre
theatreRouter.post('/new/', auth, async (req, res) => {
    try {
        const userid = req.user.id;
        const { theatreName } = req.body;
        
        if (theatreName === undefined) {
            res.status(400).json({});
            return;
        }
        
        // length of new username is not valid
        if (theatreName.length < 3 || theatreName.length > 30){
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

    //get array of theater users
    sql = await promises.readFile(
        './src/db/sql/theatre/getTheatreMembers.sql',
        'utf-8',
    );
    requestArray = [ theatreid ];
    result = await pool.query(sql, requestArray);
    console.log(result.rows);

    //loop through the users and send notifications
    for(let i = 0; i< result.rows.length; i++){
         if(result.rows[i].userid === userid){
             await addNotification(result.rows[i].userid, NotificationType.TheatreInvite);
         }else{
            await addNotification(result.rows[i].userid, NotificationType.NewMember);
         }
    }

    
    res.status(200).json({});
    return;
});

// remove a user to the desired theatre id
theatreRouter.delete('/:theatreid/remove/', auth, async (req, res) => {
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
    
    // user is already is not in the theatre
    if (result.rows[0] === undefined){
        res.status(400).json({});
        return;
    }

    sql = await promises.readFile(
        './src/db/sql/theatre/removeUserFromTheatre.sql',
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

theatreRouter.get("/:theatreid/matches/", auth, async (req, res) => {
    const { theatreid } = req.params;
    
    if (theatreid === undefined) {
        res.status(400).json({});
        return;
    }

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/theatre/getTheatreMembers.sql',
        'utf-8',
    );
    requestArray = [ theatreid ];
    
    // Getting theatre members
    try {
        result = await pool.query(sql, requestArray);
    } catch (err) {
        res.status(400).json({});
        return;
    }

    const theatreSize = result.rows.length;
    
    // Making sure theatre exists
    if (theatreSize === 0) {
        res.status(400).json({});
        return;
    }

    // Constructing tree of theatre
    let theatreMatchTree = {};
    
    for (let i = 0; i < theatreSize; i += 1) {
        theatreMatchTree[result.rows[i].userid] = [];
    }

    let theatreUsers = Object.keys(theatreMatchTree);

    sql = await promises.readFile(
        './src/db/sql/record/getUserMatches.sql',
        'utf-8',
    );

    for (let i = 0; i < theatreSize; i += 1) {
        requestArray = [ theatreUsers[i] ];
        try {
            result = await pool.query(sql, requestArray);
        } catch (err) {
            // This should never happen
            res.status(500).json({ error: "This error implies a lack of data integrity in the database. Let the backend team know about this ASAP." });
        }
        
        for (let j = 0; j < result.rows.length; j += 1) {
            theatreMatchTree[theatreUsers[i]].push(result.rows[j].movieid);
        }
    }

    console.log("============ Theatre Match Tree ============");
    console.log(theatreMatchTree);
    console.log("============================================");

    let matches = [];

    // Sorting through theatre tree to figure out the theatre matches
    for (let i = 0; i < theatreMatchTree[theatreUsers[0]].length; i += 1) {
        let currentMatch = theatreMatchTree[theatreUsers[0]][i];
        let eligible = true;
        for (let j = 1; j < theatreUsers.length; j += 1) {
            if (theatreMatchTree[theatreUsers[j]].indexOf(currentMatch) === -1) {
                eligible = false;
                break;
            }
        }
        if (eligible === true) {
            matches.push(currentMatch);
        }
    }

    res.status(200).json(matches);
    return;
});

export default theatreRouter;
