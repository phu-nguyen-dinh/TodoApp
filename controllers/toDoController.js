const ToDo = require('../models/ToDoList');

exports.createToDo = async (req, res) => {
    try{
        const data = req.body;
        const todo = new ToDo(data);
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Created New Task !"});
    }catch(err){
        console.log(err);
        res.status(err);
    }
};

exports.getAllToDos = async (req, res) => {
    let {userId} = req.params;
    try {
        const todos = await ToDo.find({ userId });
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error fetching Tasks!!!"});
    }
};

exports.updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isCompleted } = req.body;
        const result = await ToDo.findByIdAndUpdate(id, { title, description, isCompleted }, { new: true });
        if (!result) {
            return res.status(404).send({ message: "Task not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating Task!!!" });
    }
};

exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Task not found" });
        }
        res.status(200).send({ message: "Task deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting Task!!!" });
    }
};