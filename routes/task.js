const express = require('express');
const router = express.Router();
const {getAllTodos,createTodo,deleteTodo,updateTodo} = require('../controllers/todo')

router.route(`/todos`).get(getAllTodos).post(createTodo);

router.route(`/todos/:id`).delete(deleteTodo).put(updateTodo);

module.exports = router;