import bcrypt from 'bcryptjs';
import User from '../models/User';
import generateJwt from '../utils/generateJWT';

export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.status(400).send('User is already registered');
  }

  try {
    const newUser = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser
      .save()
      .then(console.log('User Created'))
      .catch((err) => console.error(err));

    const token = await generateJwt(newUser._id, email);

    res.cookie('token', token, { maxAge: 86400000, httpOnly: true });

    res.send({ error: null, token });
  } catch (err) {
    res.send({ error: 'Account cannot be created!', token: null });
  }
};
