import express from 'express';

import getStdDataRouter from './routes/getStdData';
import healthRouter from './routes/health';
import sheetsRouter from './routes/sheets';

const app = express();

app.use(express.json());

app.use('/health', healthRouter);
app.use('/sheets', sheetsRouter);
app.use('/get-std-data', getStdDataRouter);

export default app;
