import News from '../models/News';
import User from '../models/User';
import { sendMail } from './userEmailService';

const sendMailToUsers = async (category) => {
  const users = await User.find({}, { email: 1, _id: 0 });
  const msg = {
    to: '',
    from: 'cybertron611@gmail.com',
    subject: `New News for Category ${category}`,
    text: 'Hey, News are Updated at our site. Please Visit.',
  };
  try {
    users.forEach(({ email }) => {
      msg.to = email;
      sendMail(msg);
    });
  } catch (err) {
    console.error(err);
  }
};

const userPreferences = ['technology', 'sports', 'entertainment'];

export const storeNewsDataInDB = (response) => {
  try {
    response.splice(0, 15).forEach(async (news) => {
      const latestNews = new News(news);
      if (userPreferences.includes(latestNews.category)) {
        await sendMailToUsers(latestNews.category);
      }
      await latestNews.save();
    });
    return true;
  } catch (err) {
    console.error(err);
  }
  return true;
};
