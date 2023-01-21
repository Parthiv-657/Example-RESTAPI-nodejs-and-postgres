import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const app  = express()

app.get("/", (req, res)=> {
  res.json({"message" : "typescript server"});
})

app.listen(process.env.PORT, () => {
  console.log('server started at', process.env.PORT);
})
