const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

const todo = mongoose.model('note', TodoSchema);

module.exports = todo;
