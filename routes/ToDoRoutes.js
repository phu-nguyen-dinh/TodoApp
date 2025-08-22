const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/ToDoController');
const authenticateToken = require('../middleware/authJwt').authenticateToken;

router.post('/', authenticateToken, toDoController.createToDo);
router.get('/:id', authenticateToken, toDoController.getAllToDos);
router.put('/:id', authenticateToken, toDoController.updateToDo);
router.delete('/:id', authenticateToken, toDoController.deleteToDo);

module.exports = router;