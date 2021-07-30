import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';

const movieRouter = Router();

// responds with the name of a specific theatre
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
    
    // TODO: actually find a movie for the user

    res.status(200).json({});
    return;
});

export default movieRouter;
