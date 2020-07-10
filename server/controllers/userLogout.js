export const userLogout = (req, res) => {
  res.cookie('token', '', { maxAge: 0, httpOnly: true });
  res.status(200).send('You are successfully logout!');
};
