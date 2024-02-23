import express, { json } from 'express';
import cookieParser from "cookie-parser";
require('dotenv').config();

import { router as userRoutes } from './users/user.routes';
import { connectMongoDb } from './dbutils/connection';
import { isLoggedIn, restrictTo } from './middlewares/auth';
import { Roles } from './users/user.roles';

const uri =
  'mongodb+srv://yashagarwal:' +
  process.env.mongopw +
  '@mern-poc.rildjcz.mongodb.net/?retryWrites=true&w=majority';

connectMongoDb(uri);

const app = express();

const PORT = process.env.port || 3300;

app.use(json());
app.use(cookieParser());
// app.use(isLoggedIn);

app.get("/", (req,res)=>{
    res.send("Server Started");
})

app.use("/users",isLoggedIn, userRoutes);
app.use("/normal",isLoggedIn, restrictTo([Roles.Normal]), userRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
