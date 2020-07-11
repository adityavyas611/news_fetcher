import News from '../models/News';

export const storeNewsDataInDB = (response) => {
  response.forEach(async (news) => {
    const latestNews = new News(...news);
    await latestNews.save();
  });
  return true;
};
