import axios from 'axios';
import { logger } from '../utils/logger';
import { storeNewsDataInDB } from './saveNewsIntoDB';
import { gnews } from '../config/apiConfig';

export const fetchgNewsApi = async () => {
  try {
    const responseData = [];
    const newNewsObject = {};
    const gnewsApiUrl = `${gnews.endpoint}?token=${gnews.apikey}&lang=en&country=in`;
    const gnewsApiNews = await axios.get(gnewsApiUrl);
    const { data } = gnewsApiNews;
    data.articles.forEach((article) => {
      newNewsObject.name = article.title;
      newNewsObject.description = article.description;
      newNewsObject.url = article.url;
      newNewsObject.category = 'general';
      newNewsObject.language = 'en';
      newNewsObject.country = 'in';
      responseData.push({ ...newNewsObject });
    });
    storeNewsDataInDB(responseData);
  } catch (err) {
    logger.error(`Error Occured in fetching news from gnews: ${err}`);
  }
};
