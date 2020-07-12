import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger';
import { JWT_KEY } from '../constants';

const getAuthCookie = (req) => {
  if (req.headers.cookie) {
    const authToken = req.headers.cookie.split(';').filter((cookie) => cookie.indexOf('token') !== -1);
    if (authToken.length > 0) {
      return authToken[0].split('=')[1];
    }
  }

  return undefined;
};

const ensureAuthenticated = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS') {
      next();
    }
    const token = getAuthCookie(req) || req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    logger.error(`Error Occured in ensureAuthenticated: ${error}`);
    res.status(401).send({ message: 'User Not Authenticated!' });
  }
};

export default ensureAuthenticated;
