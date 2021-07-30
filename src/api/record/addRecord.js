import { promises } from 'fs';
import { pool } from '../../db';
import { decreaseUserPrefs, increaseUserPrefs } from '../user/updateUserPrefs';

async function addRecord(user, movie, action) {
    let sql, requestArray, result;

    // Adding the record
    sql = await promises.readFile(
        './src/db/sql/record/addRecord.sql',
        'utf-8',
    );
    requestArray = [ user, movie, action ];
    result = await pool.query(sql, requestArray);

    // Getting the movie's genres
    sql = await promises.readFile(
        './src/db/sql/movie/getMovieGenres.sql',
        'utf-8',
    );
    requestArray = [ movie ];
    result = await pool.query(sql, requestArray);

    // Assemble the movie's genres
    let genres = [];

    for (let i = 0; i < result.rows.length; i += 1) {
        genres.push(result.rows[i].genre);
    }

    // Modify preferences for each genre
    if (action === true) {
        for (let i = 0; i < genres.length; i += 1) {
            await increaseUserPrefs(user, genres[i]);
        }
    }
    else {
        for (let i = 0; i < genres.length; i += 1) {
            await decreaseUserPrefs(user, genres[i]);
        }
    }
}

export { addRecord };
