import express from 'express';
import { userRegister } from '../controllers/userRegister';
import ensureAuthenticated from '../middlewares/Auth';
import { userLogin } from '../controllers/userLogin';
import { userLogout } from '../controllers/userLogout';

const router = express.Router();

router.get('/', (req, res) => res.send('User gets created'));

router.post('/register', userRegister);

router.post('/login', userLogin);

router.get('/logout', userLogout);

router.get('/auth', ensureAuthenticated, (req, res) => {
  res.send('Auth success');
});

export default router;
