import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    res.status(200).json({});
    return;
});

export default userRouter;
