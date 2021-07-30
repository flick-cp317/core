import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from './auth';
import { addUser } from './addUser';

const userRouter = Router();

// test API call
userRouter.get('/id', auth, async (req, res) => {
    res.status(200).json(req.user);
    return;
});

// create a new user
userRouter.post('/new', async (req, res) => {
    const { username, password } = req.body;
    
    // Ensuring good data
    if (username === undefined || password === undefined) {
        res.status(400).json({});
        return;
    }

    // Ensuring the username and password are adequate length
    if (username.length < 3 || password.length < 8) {
        res.status(400).json({});
        return;
    }
    
    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/user/getUserFromUsername.sql',
        'utf-8',
    );
    requestArray = [ username ];
    // Try to find the username in the database
    result = await pool.query(sql, requestArray);

    // See if the user is in the database
    if (result.rows[0] === undefined) {
        await addUser(username, password);

        res.status(200).json({});
        return;
    }
    else {
        // The username is already in the database; no user can be created
        res.status(401).json({});
        return;
    }
});

// login in the user
userRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // Ensuring good data
    if (username === undefined || password === undefined) {
        res.status(400).json({});
        return;
    }

    // Ensuring the username and password are adequate length
    if (username.length < 3 || password.length < 8) {
        res.status(400).json({});
        return;
    }
    
    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/user/getUserFromUsername.sql',
        'utf-8',
    );
    requestArray = [ username ];
    // Search for username in the database
    result = await pool.query(sql, requestArray);

    if (result.rows[0] === undefined) {
        // Username doesn't exist
        res.status(401).json({});
        return;
    }
    else {
        // Username exists

        // See if password matches
        const matchingPassword = await bcrypt.compare(password, result.rows[0]["password"]);
        
        if (!matchingPassword) {
            // The password doesn't match, so the request ends
            res.status(401).json({});
            return;
        }

        // The password has matched, now for authentication
        const userId = result.rows[0]["userid"];
        
        const token = jwt.sign({ id: userId }, process.env.ACCESSTOKEN)

        res.status(200).json({ token: token, userid: userId });
        return;
    }
});

// set a new username for the desired userid
userRouter.put('/:userid/username', auth, async (req, res) => {
    
    const { userid } = req.params;
    const { newUsername } = req.body;
    
    // Ensuring good data
    if (newUsername === undefined) {
        res.status(400).json({});
        return;
    }

    // length of new username is not valid
    if (newUsername.length < 3 || newUsername.length > 30){
        res.status(400).json({});
            return;
    }

    // userid in params does not match the token
    if (userid !== req.user.id){
        res.status(401).json({});
            return;
    }
    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/user/getUserFromId.sql',
        'utf-8',
    );
    requestArray = [ userid ];
    // Search for user in the database
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
            return;
    }

    const currUsername = result.rows[0].username;

    // check to see if the updated username is the same as the current
    if (newUsername === currUsername){
        res.status(400).json({});
            return;
    }

    console.log(currUsername);
    console.log(newUsername);

    sql = await promises.readFile(
        './src/db/sql/user/updateUsername.sql',
        'utf-8',
    );
    requestArray = [ newUsername,userid ];
    // Search for user in the database
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
            return;
    }

    res.status(200).json();
    return;
});

// get user info
userRouter.get('/:userid', auth, async (req, res) => {

    const { userid } = req.params;

    // Ensuring good data
    if (userid === undefined) {
        res.status(400).json({});
        return;
    }

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/user/getUserFromId.sql',
        'utf-8',
    );
    requestArray = [ userid ];
    // Search for user in the database
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error){
        res.status(400).json({});
            return;
    }

    res.status(200).json({username: result.rows[0].username, userid: result.rows[0].userid});

    return;
});

export default userRouter;
