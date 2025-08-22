const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/ToDoController');

router.post('/', toDoController.createToDo);
router.get('/:id', toDoController.getAllToDos);
router.put('/:id', toDoController.updateToDo);
router.delete('/:id', toDoController.deleteToDo);

module.exports = router;