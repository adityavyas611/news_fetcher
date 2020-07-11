import News from '../models/News';

export const fetchLatestNews = async (req, res) => {
  try {
    const getNews = await News.find({}, { _id: 0, __v: 0 });
    if (getNews.length) {
      res.send(getNews);
    } else {
      throw new Error('No News Found!');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// category wise display to user

