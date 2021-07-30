import { promises } from 'fs';
import { pool } from '../../db';

async function increaseUserPrefs(userid, genre) {
    let sql, requestArray;

    sql = await promises.readFile(
        './src/db/sql/user/increasePrefs.sql',
        'utf-8',
    );
    requestArray = [ userid, genre ];
    await pool.query(sql, requestArray);
}

async function decreaseUserPrefs(userid, genre) {
    let sql, requestArray;

    sql = await promises.readFile(
        './src/db/sql/user/decreasePrefs.sql',
        'utf-8',
    );
    requestArray = [ userid, genre ];
    await pool.query(sql, requestArray);
}

export { increaseUserPrefs, decreaseUserPrefs }
