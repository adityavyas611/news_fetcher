import express from 'express';
import { storeNewsDataInDB } from '../services/saveNewsIntoDB';
import { fetchLatestNews } from '../controllers/newsController';

const newsRouter = express.Router();

newsRouter.get('/', (req, res) => {
  const isSuccessful = storeNewsDataInDB();
  if (isSuccessful) {
    res.send('News Inserted Successfully');
  }
});

newsRouter.get('/latestNews', fetchLatestNews);

export default newsRouter;
