import express from 'express';
import { router } from './todos/todo.routes';
import { connectMongoDb } from './dbutils/dbconn';
require('dotenv').config();

const app = express();

app.use(express.json())

const uri =
  'mongodb+srv://yashagarwal:' +
  process.env.mongopw +
  '@mern-poc.rildjcz.mongodb.net/?retryWrites=true&w=majority';

connectMongoDb(uri);

app.get('/', (req, res) => {
  res.send('ZOD Crud API');
});

app.use("/todos", router);

app.listen(3000, () => console.log('Server running on PORT: ', 3000));
