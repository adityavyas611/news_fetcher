import axios from 'axios';
import storeNewsDataInDB from './saveNewsIntoDB';
import { gnews } from '../config/apiConfig';

export const fetchNewsApi = async () => {
  try {
    const gnewsApiUrl = `${gnews.endpoint}?token=${gnews.apikey}`;
    const gnewsApiNews = await axios.get(gnewsApiUrl);
    await storeNewsDataInDB(gnewsApiNews);
  } catch (err) {
    console.error(err);
  }
};
