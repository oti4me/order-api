import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { notFoundError, errorHandler } from './middleware/errors';
import api from './routes/api'

const app = express();
const port = parseInt(process.env.PORT) || 3001;

dotenv.config();

app.disable('x-powered-by');
app.use(
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev'),
  cors()
);
app.use('/api/v1', api);
app.use(
  notFoundError,
  errorHandler
);

app.listen(port, () =>
  console.log(`Server started and listening on port ${port}`)
);
