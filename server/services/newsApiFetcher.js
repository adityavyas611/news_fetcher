import axios from 'axios';
import { logger } from '../utils/logger';
import { storeNewsDataInDB } from './saveNewsIntoDB';
import { newsApi } from '../config/apiConfig';

export const fetchNewsApi = async () => {
  try {
    const newsApiUrl = `${newsApi.endpoint}?apiKey=${newsApi.apikey}`;
    const newsApiNews = await axios.get(newsApiUrl);
    const { data } = newsApiNews;
    storeNewsDataInDB(data.sources);
  } catch (err) {
    logger.error(`Error in fetching news fron newsApi: ${err}`);
  }
};
