import { promises } from 'fs';
import { pool } from '../../db';

// To add the good movie data
async function addRecord(user, movie, action) {
    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/record/addRecord.sql',
        'utf-8',
    );
    requestArray = [user, movie, action];
   
    result = await pool.query(sql, requestArray);

    // Update user prefs goes here
   
    console.log(result.rows[0]);
}

export {addRecord};