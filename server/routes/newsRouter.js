import express from 'express';
import { getLatestNews, getNewsByCategory, updateVoteForNews } from '../controllers/newsController';

const newsRouter = express.Router();

newsRouter.get('/latestNews', getLatestNews);

newsRouter.get('/category/:id', getNewsByCategory);

newsRouter.put('/updateVote/:newsName', updateVoteForNews);

export default newsRouter;
