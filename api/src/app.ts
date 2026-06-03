import express from 'express';

import healthRouter from './routes/health';
import sheetsRouter from './routes/sheets';

const app = express();

app.use(express.json());

app.use('/health', healthRouter);
app.use('/sheets', sheetsRouter);

export default app;
