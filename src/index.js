import express from 'express';
import cors from 'cors';

import { userRouter, theatreRouter, recordRouter, movieRouter, notificationRouter } from './api'; 
import { initializeDatabase } from './db';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/theatre', theatreRouter);
app.use('/api/record', recordRouter);
app.use('/api/movie', movieRouter);
app.use('/api/notification', notificationRouter);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
    console.log(`Flick service started [Running on port ${port}]`);
    
    await initializeDatabase();
});
