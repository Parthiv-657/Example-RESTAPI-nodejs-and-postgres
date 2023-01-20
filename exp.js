const mongoose = require('mongoose');
const todoModel = require('./repositories/TodoModel')
require('dotenv').config();

const PORT = process.env.PORT;
// console.log(PORT);
const uri =
    "mongodb+srv://parthiv:parthiv@cluster0.ehsdwnr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)

const obj = {id : 2, text : "this is aaadf note", created_at : new Date()}

const todo = todoModel(obj)

// console.log(todo)

const filter = {};
todoModel.find(filter)
    .then((todos) => console.log(todos))
    .catch((err) => console.log(err))

// todo.save()
//     .then((todo) => console.log(todo))
//     .catch((err) => (console.log(err)))