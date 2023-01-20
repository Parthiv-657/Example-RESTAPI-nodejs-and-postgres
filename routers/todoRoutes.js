/* eslint-disable import/named */
const {Router} = require("express");

const {
  addTodo,
  deleteTodo,
  updateTodo,
  getTodo,
  invalidRequest,
} = require("../controllers/todoController.js");

const router = Router();

// Crud operations for note
router
  .route("/note")
  .get(getTodo)
  .post(addTodo)
  router.route("/note:id").delete(deleteTodo)
  router.route("/note:id").put(updateTodo)

// catch all other routes
router.route("*").get(invalidRequest);

module.exports = router;