import axios from 'axios';
import storeNewsDataInDB from './saveNewsIntoDB';
import { newsApi } from '../config/apiConfig';

export const fetchNewsApi = async () => {
  try {
    const newsApiUrl = `${newsApi.endpoint}?token=${newsApi.apikey}`;
    const newsApiNews = await axios.get(newsApiUrl);
    await storeNewsDataInDB(newsApiNews);
  } catch (err) {
    console.error(err);
  }
};
