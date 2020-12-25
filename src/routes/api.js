import { Router } from 'express';
import { firebase } from '../config/firebase';
import { ok } from '../Helpers/response';

const router = Router();

router.use('/', async (req, res, next) => {
  const db = firebase.firestore();
  try {
    const users = await db.collection('users').get();
    ok(res, {
      message: 'Welcome to the API for this great app.',
      data: users.docs.map(user => user.data()),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
