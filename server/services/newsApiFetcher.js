import axios from 'axios';
import { storeNewsDataInDB } from './saveNewsIntoDB';
import { newsApi } from '../config/apiConfig';

export const fetchNewsApi = async () => {
  try {
    const newsApiUrl = `${newsApi.endpoint}?apiKey=${newsApi.apikey}`;
    const newsApiNews = await axios.get(newsApiUrl);
    const { data } = newsApiNews;
    await storeNewsDataInDB(data.sources);
  } catch (err) {
    console.error(err);
  }
};
