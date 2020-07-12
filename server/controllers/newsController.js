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

export const updateVoteForNews = async (req, res) => {
  const { newsName } = req.params;
  const { authencityType, email } = req.body;
  try {
    const authenticColumn = `authencity.${authencityType}`;
    const result = await News.findOneAndUpdate(
      { name: newsName },
      { $addToSet: { [authenticColumn]: email } }, { new: true },
    );
    const { authencity: { fake, notSure, authentic } } = await News.findOne(
      { name: newsName }, { authencity: 1 },
    );
    const totalVotes = fake.length + notSure.length + authentic.length;
    const totalAuthenticity = totalVotes && authentic.length
      ? Math.round((authentic.length / totalVotes) * 100) : 0;

    const updatedResult = await News.findOneAndUpdate(
      { name: newsName },
      { $set: { totalAuthenticity } }, { new: true },
    );

    if (updatedResult) {
      res.send({ message: 'Voted!' });
    } else {
      throw new Error('Your Can\'t Vote!');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
