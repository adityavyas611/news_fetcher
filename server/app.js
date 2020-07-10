import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/dbConfig';
import { PORT } from './constants';
import router from './routes/userRouter';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('This is Backend Server'));

app.use('/user', router);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
