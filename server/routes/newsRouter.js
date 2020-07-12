import express from 'express';
import { getLatestNews, updateVoteForNews } from '../controllers/newsController';

const newsRouter = express.Router();

newsRouter.get('/latestNews', getLatestNews);

newsRouter.put('/updateVote/:newsName', updateVoteForNews);

export default newsRouter;
