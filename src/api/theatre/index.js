import { Router } from 'express';

const theatreRouter = Router();

theatreRouter.get('/', async (req, res) => {
    res.status(200).json({});
    return;
});

export default theatreRouter;
