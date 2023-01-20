const express = require("express")
const router = require('./routers/todoRoutes');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;
// console.log(PORT);
const uri =
    "mongodb+srv://parthiv:parthiv@cluster0.jsiwjml.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)

const app = express();

app.use(router)

app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});