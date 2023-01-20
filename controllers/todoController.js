const todo = require("../repositories/TodoModel");

// Crud operations for note
const addTodo = (req, res) => {
  req.body.created_date = new Date();
  const newNote = todo(req.body);
  newNote
    .save()
    .then((note) => res.json(note))
    .catch((err) => {
      // notesLogger(err);
      res.status(400).json({
        msg: "Bad request",
        errors: err.errors,
      });
    });
};

const getTodo = (req, res) => {
  const filter = {};
  todoModel
    .find(filter)
    .then((note) => res.json(note))
    .catch((err) => {
      // notesLogger(err);
      res.status(400).json({ msg: "Bad request" });
    });
};

const updateTodo = (req, res) => {
  filter = {id : req.params.id}
  todoModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((note) => res.json(note))
    .catch((err) => {
      // notesLogger(err);
      res.status(400).json({ msg: "Bad request" });
    });
};

const deleteTodo = (req, res) => {
  todoModel
    .deleteOne({ id: req.params.id })
    .then((note) => res.json(note))
    .catch((err) => {
      // notesLogger(err);
      res.status(400).json({ msg: "Bad request" });
    });
};

// Handling all not found requests
const invalidRequest = (req, res) => {
  res.status(404).json({ msg: "Request not found" });
};

module.exports = {
  addTodo,
  deleteTodo,
  updateTodo,
  getTodo,
  invalidRequest,
};
