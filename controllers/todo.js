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
    const {Task, Completed} = todoSchema.create(req.body);
    
    try {
        const newTodo  = new todoSchema({Task,Completed})
        await newTodo.save();
        res.status(201).json({newTodo});
    } catch (error) {
        res.status(500).json({error:`Internal server Error`})
    }
}

module.exports = {getAllTodos,createTodo}