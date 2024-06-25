// need schema for createTodo from model
const Todo = require('../model/Todo');


//define route handler
exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});    //find method is of mongoose library
        //send a json response with success flag
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.getTodoById = async(req,res) => {
    try{
        //extract todo items on the basis of an id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id}); 

        //data for given id not found
        if(!todo)
            {
                return res.status(404).json({
                    success: false,
                    message:'No data found for given ID',
                })
            }
        //data for given id found
        res.status(200).json({
            success: true,
            data:todo,
            message:`Data found for given ID ${id}`,
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:"Server Error",
            error:err.message,
        })
    }
} 