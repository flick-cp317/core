import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';
import { getMovieForUser } from './getMovieForUser';

const movieRouter = Router();

// Responds with details of a specific movie
movieRouter.get('/:movieid/', auth, async (req, res) => {
    const { movieid } = req.params;

    if (movieid === undefined) {
        res.status(400).json({});
        return;
    }

    let sql, requestArray, result;
    
    sql = await promises.readFile(
        './src/db/sql/movie/getMovieInfo.sql',
        'utf-8',
    );
    requestArray = [ movieid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({});
        return;
    }

    let responseObject = {
        movieid: result.rows[0].movieid,
        title: result.rows[0].title,
        description: result.rows[0].description,
        genres: [],
    }

    sql = await promises.readFile(
        './src/db/sql/movie/getMovieGenres.sql',
        'utf-8',
    );
    requestArray = [ movieid ];
    try {
        result = await pool.query(sql, requestArray);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({});
        return;
    }

    for (let i = 0; i < result.rows.length; i += 1) {
        responseObject.genres.push(result.rows[i].genre);
    }
    
    res.status(200).json(responseObject);
    return;
});


movieRouter.get('/user/:userid/', auth, async (req, res) => {
    const { userid } = req.params;

    if (userid !== req.user.id) {
        res.status(401).json({});
        return;
    }

    // Verifying user has movies they can still respond to
    const amountOfMovies = (await pool.query(`SELECT * FROM movie;`)).rows.length;
    const amountOfUserRecordEntries = (await pool.query(`SELECT * FROM record WHERE userId = '${userid}';`)).rows.length;

    if (amountOfMovies === amountOfUserRecordEntries) {
        res.status(400).json({ err: "User has exhausted the Flick database" });
        return;
    }

    // Attempt to find a movie up to 50 times, if it can't find it then respond with an error
    for (let i = 0; i < 50; i += 1) {
        const movieForUser = await getMovieForUser(userid);
        if (movieForUser !== false) {
            res.status(200).json({ movie: movieForUser });
            return;
        }
        console.log(`MovieForUser attempt ${i + 1} FAIL`);
    }

    res.status(500).json({ err: "Server could not find a movie for the user" });
    return;
});

export default movieRouter;
