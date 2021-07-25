import { pool } from '../../db';
import { promises } from 'fs';
import { GenreName } from '../../genres';

async function addGenreToMovie(movieId, genre) {
    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/movie/addGenreToMovie.sql',
        'utf-8',
    );
    requestArray = [ genre, movieId ];
    result = await pool.query(sql, requestArray);
    console.log(result.rows[0].movieid, " ", GenreName[result.rows[0].genre]);
}

async function addMovie(title, description, genres) {
    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/movie/addMovie.sql',
        'utf-8',
    );
    requestArray = [ title, description ];
    result = await pool.query(sql, requestArray);

    const { movieid } = result.rows[0];

        console.log(movieid, result.rows[0].title);

    for (let i = 0; i < genres.length; i += 1) {
        await addGenreToMovie(movieid, genres[i]);
    }
}

export { addMovie };
