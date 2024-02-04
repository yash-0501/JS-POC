const express = require("express");

const app = express();
const port = 8000;

app.get('/', (req,res)=>{
    return res.send("Hello! Home Page!");
})

app.get('/about', (req,res)=>{
    return res.send(`About Page! Hey ${req.query.name}`);
})

app.listen(port, ()=>{
    console.log(`Server started ${port}!`);
});