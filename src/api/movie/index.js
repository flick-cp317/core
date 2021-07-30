import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';
import { GenreName } from '../../genres';

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
    

    // TODO: Make sure the user has movies not in the record table

    let sql, requestArray, result;
    
    //getting user preferences
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
        res.status(400).json({});
        return;
    }

    
    console.log(result.rows);
    let genre_prefs = [];
    let sum = 0;

    for (let i = 0; i < result.rows.length; i++){
        genre_prefs.push(result.rows[i].rating);
        sum += result.rows[i].rating;
    }

    
    //select genre to reccomend
    let random_index = Math.floor(Math.random()*(sum));
    //console.log(random_index);
    
    let counter = 0;
    let genre_index = -1;
    //translate selected genre to correct index
    while(counter <= random_index ){
        genre_index += 1;
        counter += genre_prefs[genre_index];
    }

    //TODO: check if there are movies available in this genre 


    //console.log(genre_index);
    console.log(GenreName[genre_index]);

    
    res.status(200).json({});
    return;
});

export default movieRouter;
