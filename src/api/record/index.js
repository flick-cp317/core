import { Router } from 'express';
import { promises } from 'fs';
import { pool } from '../../db';
import auth from '../user/auth';

const recordRouter = Router();

recordRouter.post('/', auth, async (req, res) => {
    res.status(200).json(req.user);
    return;
});




export default recordRouter;
