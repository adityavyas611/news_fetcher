import News from '../models/News';

export const getLatestNews = async (req, res) => {
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

// news by categories
export const getNewsByCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const getNews = await News.find({ category: id }, { _id: 0, __v: 0 });
    if (getNews.length) {
      res.send(getNews);
    } else {
      throw new Error('No News Found for this Category!');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateVoteForNews = async (req, res) => {
  const { newsName } = req.params;
  const { authencityType, email } = req.body;
  try {
    const newColumn = `authencity.${authencityType}`;
    const result = await News.findOneAndUpdate({ name: newsName }, { $push: { [newColumn]: email } }, { new: true });
    if (result) {
      res.send({ message: 'Voted!' });
    } else {
      throw new Error('Your Can\'t Vote!');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
