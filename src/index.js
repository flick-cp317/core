import express from 'express';

import { userRouter, theatreRouter } from './api'; 
import { deleteDatabase, initializeDatabase } from './db';

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/theatre', theatreRouter);

const port = 8080;

app.listen(port, async () => {
    console.log(`Flick service started [Running on port ${port}]`);
    
    // Uncomment if you want to delete the database
    await deleteDatabase();
    
    await initializeDatabase();
});
