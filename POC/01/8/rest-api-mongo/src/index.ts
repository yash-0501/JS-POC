import express from 'express';

import { connectMongoDb } from './dbutils/connection';
import { logReqRes } from './middlewares/logs';

require('dotenv').config();

const app = express();

import { router } from './routes/user';

const uri =
  'mongodb+srv://yashagarwal:' +
  process.env.mongopw +
  '@mern-poc.rildjcz.mongodb.net/?retryWrites=true&w=majority';

connectMongoDb(uri);

// Middleware
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;

app.use(logReqRes('log.txt'));

// Routes
app.use('/api/users', router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
