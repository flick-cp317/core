import express from 'express';

import { userRouter, theatreRouter, recordRouter, movieRouter } from './api'; 
import { initializeDatabase } from './db';

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/theatre', theatreRouter);
app.use('/api/record', recordRouter);
app.use('/api/movie', movieRouter);

const port = 8080;

app.listen(port, async () => {
    console.log(`Flick service started [Running on port ${port}]`);
    
    await initializeDatabase();
});
