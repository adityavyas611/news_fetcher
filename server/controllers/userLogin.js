import bcrypt from 'bcryptjs';
import User from '../models/User';
import generateJwt from '../utils/generateJWT';

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send('Email Not Found, User doesn\'t Exist!');
      return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
      const token = await generateJwt(user._id, email);
      res.cookie('token', token, { maxAge: 86400000, httpOnly: true });
      res.send({ token });
    } else {
      res.status(400).send('Password is incorrect, Please Try Again!');
    }
  } catch (err) {
    res.status(500).send('Server Error!');
  }
};

export const getUserDetail = async (req, res) => {
  try {
    const { userData } = req;
    const user = await User.findOne({ _id: userData.id }).select({ name: 1, email: 1, _id: 0 });
    res.send(user);
  } catch (err) {
    res.status(500).send('Server Error!');
  }
};
