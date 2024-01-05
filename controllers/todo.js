const todoSchema = require('../models/todo');


const getAllTodos = async(req,res)=>{
    try {
        const todos = await todoSchema.find();
        res.status(201).json(todos);
    } catch (error) {
        res.status(500).json({error:`Internal server Error`})
    }
}


const createTodo = async(req,res)=>{
    const {task, completed} = req.body;

    try {
        const newTodo  = new todoSchema({task,completed})
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({error:`Internal server Error`})
    }
}


const deleteTodo = async(req,res)=>{
    const todoID = req.params.id;

    try {
        await todoSchema.findByIdAndDelete(todoID);
        res.json({ message: 'Todo deleted successfully...' })
    } catch (error) {
        res.status(500).json({error:`Internal server Error`})
    }
}


const updateTodo = async(req,res)=>{
    const todoID = req.params.id;
    const {task} = req.body
    try {
        const todo = await todoSchema.findById(todoID);
        if (todo) {
            todo.task = task;
            await todo.save();
            res.json(todo)
        } else {
            res.status(404).json({error:`Todo Not Found`});
        }
    } catch (error) {
        res.status(500).json({error:`Internal server Error`})
    }
}

module.exports = {getAllTodos,createTodo,deleteTodo,updateTodo}