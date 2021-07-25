import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from './auth';
import { addUser } from './addUser';

const userRouter = Router();

userRouter.get('/id', auth, async (req, res) => {
    res.status(200).json(req.user);
    return;
});

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

        res.status(200).json({ token: token });
        return;
    }
});

export default userRouter;
