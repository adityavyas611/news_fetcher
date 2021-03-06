import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { logger } from './utils/logger';
import './config/dbConfig';
import './services/cronJob';
import { PORT } from './constants';
import userRouter from './routes/userRouter';
import newsRouter from './routes/newsRouter';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/news', newsRouter);

app.listen(PORT, () => logger.info(`Server listening on PORT: ${PORT}`));
