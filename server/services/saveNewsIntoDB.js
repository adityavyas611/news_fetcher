import { logger } from '../utils/logger';
import News from '../models/News';
import User from '../models/User';
import { sendMail } from './userEmailService';

const userPreferences = ['technology', 'sports', 'entertainment'];

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
      logger.info('Sending Email to Subscribe Users');
      sendMail(msg);
    });
  } catch (err) {
    logger.error(`Error Occured in sendMailToUsers: ${err}`);
  }
};

export const storeNewsDataInDB = (response) => {
  try {
    response.splice(0, 15).forEach(async (news) => {
      const latestNews = new News(news);
      if (userPreferences.includes(latestNews.category)) {
        await sendMailToUsers(latestNews.category);
      }
      logger.info('Saving news to DB');
      await latestNews.save();
    });
  } catch (err) {
    logger.error(`Error while storing news to db: ${err}`);
  }
  return true;
};
