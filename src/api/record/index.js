import { Router } from 'express';
import auth from '../user/auth';
import { addRecord } from './addRecord';

const recordRouter = Router();

recordRouter.post('/', auth, async (req, res) => {
    const { user, movie, action } = req.body;

    if (user === undefined || movie === undefined || action === undefined){
        res.status(400).json({});
        return;
    }

    if (user !== req.user.id){
        res.status(401).json({});
        return;
    }

    try {
        await addRecord(user, movie, action);
    } catch (err) {
        console.log(err);
        res.status(400).json({});
        return;
    }
    
    res.status(200).json({});
    return;
});

export default recordRouter;
