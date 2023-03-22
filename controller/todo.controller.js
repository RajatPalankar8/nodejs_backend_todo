const ToDoService = require('../services/todo.service');

exports.createToDo =  async (req,res,next)=>{
    try {
        const { userId,title, desc } = req.body;
        let todoData = await ToDoService.createToDo(userId,title, desc);
        res.json({status: true,success:todoData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getToDoList =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let todoData = await ToDoService.getUserToDoList(userId);
        res.json({status: true,success:todoData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteToDo =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await ToDoService.deleteToDo(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}