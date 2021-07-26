import { promises } from 'fs';
import { pool } from '../../db';
import bcrypt from 'bcrypt';
import {Genre} from '../../genres'

async function addUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    
    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/user/addUser.sql',
        'utf-8',
    );
    requestArray = [ username, passwordHash ];
    result = await pool.query(sql, requestArray);
    console.log(result.rows[0]);
    addUserPrefs(result.rows[0].userid);
}

async function addUserPrefs(userid) {
    let sql, requestArray, result;

    sql = await promises.readFile(
        './src/db/sql/user/addPrefs.sql',
        'utf-8',
    );
    for (let i = 0; i < Object.keys(Genre).length; i+=1){
        requestArray = [ userid, i ];
        result = await pool.query(sql, requestArray);
    }
}

export { addUser };
