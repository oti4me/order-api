import { Router } from 'express';

const router = Router();

router.use('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API for this great app.'
  });
});

export default router;
