import express from "express";
import { connectMongoDb } from "./dbutils/connection";
import { urlRouter } from "./urls/urls.routes";
require("dotenv").config()

const port = process.env.port || 3000;

const app = express();

app.use(express.json())

const uri =
  'mongodb+srv://yashagarwal:' +
  process.env.mongopw +
  '@mern-poc.rildjcz.mongodb.net/?retryWrites=true&w=majority';

connectMongoDb(uri);

app.get("/", (req,res)=>{
    res.send("Hello World!!!")
})

app.use("/urlShortner", urlRouter)

app.listen(port, ()=>console.log(`Running on link: http://127.0.0.1:${port}/`));