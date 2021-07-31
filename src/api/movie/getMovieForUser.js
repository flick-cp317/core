import { promises } from 'fs';
import { pool } from '../../db';
import { GenreName } from '../../genres';

async function getMovieForUser(userid) {
    let sql, requestArray, result;
    
    // Getting user preferences
    sql = await promises.readFile(
        './src/db/sql/user/getUserPrefs.sql',
        'utf-8',
    );
    requestArray = [ userid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (err) {
        console.log(err);
        return false;
    }
    
    let genrePrefs = [];
    let sum = 0;

    for (let i = 0; i < result.rows.length; i += 1) {
        genrePrefs.push(result.rows[i].rating);
        sum += result.rows[i].rating;
    }
    
    // Select genre to recommend
    let randomIndex = Math.floor(Math.random() * sum);
    if (randomIndex === sum) {
        randomIndex -= 1;
    }

    let counter = 0;
    let genreResult = -1;

    while (counter <= randomIndex) {
        genreResult += 1;
        counter += genrePrefs[genreResult];
    }

    console.log(GenreName[genreResult]);

    sql = await promises.readFile(
        './src/db/sql/movie/getMoviesByGenre.sql',
        'utf-8',
    );
    requestArray = [ genreResult ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (err) {
        console.log(err);
        return false;
    }

    let movies = {};
    for (let i = 0; i < result.rows.length; i += 1) {
        movies[result.rows[i].movieid] = true;
    }

    sql = await promises.readFile(
        './src/db/sql/record/getUserRecord.sql',
        'utf-8',
    );
    requestArray = [ userid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (err) {
        console.log(err);
        return false;
    }

    for (let i = 0; i < result.rows.length; i += 1) {
        const movieid = result.rows[i].movieid;

        if (movies[movieid] !== undefined) {
            delete movies[movieid];
        }
    }

    const finalMovieList = Object.keys(movies);

    if (finalMovieList.length === 0) {
        return false;
    }

    let randomMovieIndex = Math.floor(Math.random() * finalMovieList.length);
    if (randomMovieIndex === finalMovieList.length) {
        randomMovieIndex -= 1;
    }
    return finalMovieList[randomMovieIndex];
}

export { getMovieForUser };
