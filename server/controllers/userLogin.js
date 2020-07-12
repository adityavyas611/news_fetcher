import bcrypt from 'bcryptjs';
import { logger } from '../utils/logger';
import User from '../models/User';
import generateJwt from '../utils/generateJWT';

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send({ message: 'Email Not Found, User doesn\'t Exist!' });
      return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
      const token = await generateJwt(user._id, email);
      res.cookie('token', token, { maxAge: 86400000, httpOnly: true });
      res.send(user);
    } else {
      res.status(400).send({ message: 'Password is incorrect, Please Try Again!' });
    }
  } catch (err) {
    logger.error(`Error Occured in userLogin: ${err}`);
    res.status(500).send({ message: 'Server Error!' });
  }
};
