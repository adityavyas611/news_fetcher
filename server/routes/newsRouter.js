import express from 'express';
import { fetchLatestNews, fetchCategoryNews } from '../controllers/newsController';

const newsRouter = express.Router();

newsRouter.get('/latestNews', fetchLatestNews);

newsRouter.get('/category/:id', fetchCategoryNews);

export default newsRouter;
