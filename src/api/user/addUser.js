import { promises } from 'fs';
import { pool } from '../../db';
import bcrypt from 'bcrypt';

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
}

export { addUser };
