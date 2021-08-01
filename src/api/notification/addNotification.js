import { promises } from 'fs';
import { pool } from '../../db';

//create and add notification to the table for a user when user is added to theater
async function addNotification(userId, NotificationType){
    let sql, requestArray;
    
    sql = await promises.readFile(
        './src/db/sql/notification/addNotification.sql',
        'utf-8',
    );
    requestArray = [ NotificationType, userId ];

    await pool.query(sql, requestArray);

    return;

}

export{ addNotification};