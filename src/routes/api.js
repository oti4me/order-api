import { Router } from 'express';
import { firebase } from '../config/firebase';
import { ok } from '../helpers/response';
import order from './order'

const router = Router();

router.use('/orders', order);

router.get('/', async (req, res, next) => {
  ok(res, {
    message: 'Welcome to the API for this great app.',
  });
});

export default router;
