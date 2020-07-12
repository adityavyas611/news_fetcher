import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './config/dbConfig';
import './services/cronJob';
import { PORT } from './constants';
import router from './routes/userRouter';
import newsRouter from './routes/newsRouter';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', router);
app.use('/news', newsRouter);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
