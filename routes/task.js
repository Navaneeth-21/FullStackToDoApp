const express = require('express');
const router = express.Router();
const {getAllTodos,createTodo} = require('../controllers/todo')

router.route('/todos').get(getAllTodos).post(createTodo);

module.exports = router;