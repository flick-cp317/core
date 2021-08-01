import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';

const notificationRouter = Router();


// responds with the notifications for a specific user
notificationRouter.get('/user/:userid/', auth, async (req, res) => {
    const { userid } = req.params;

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/notification/getNotification.sql',
        'utf-8',
    );
    requestArray = [ userid ];

    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({});
        return;
    }

    if (result.rows[0] === undefined) {
        res.status(200).json([]);
        return;
    }

    res.status(200).json(result.rows);

    return;
});


// deletes all of a users notifications
notificationRouter.delete('/user/:userid/', auth, async (req, res) => {
    const { userid } = req.params;

    let sql, requestArray;
    
    sql = await promises.readFile(
        './src/db/sql/notification/removeAllNotification.sql',
        'utf-8',
    );
    requestArray = [ userid ];

    try {
        await pool.query(sql, requestArray);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({});
        return;
    }

    res.status(200).json({});

    return;
});

// deletes a single of a users notifications
notificationRouter.delete('/:notificationid/', auth, async (req, res) => {
    const { notificationid } = req.params;
    const userid = req.user.id;

    let sql, requestArray, result;
    //check for notification to exist
    result = sql = await promises.readFile(
        './src/db/sql/notification/getNotificationByID.sql',
        'utf-8',
    );
    requestArray = [ notificationid, userid ];

    try {
        result = await pool.query(sql, requestArray);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({});
        return;
    }
    //if the notification does not exist return error
    if (result.rows[0] === undefined){
        res.status(400).json({});
        return;
    }

    //call SQL statement to delete noti
    sql = await promises.readFile(
        './src/db/sql/notification/removeNotification.sql',
        'utf-8',
    );
    requestArray = [ notificationid, userid ];

    try {
        await pool.query(sql, requestArray);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({});
        return;
    }
    
    res.status(200).json({});

    return;
});

export default notificationRouter;
