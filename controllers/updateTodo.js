// need schema for createTodo from model
const Todo = require('../model/Todo');


//define route handler
exports.updateTodo = async(req,res) => {
    try{
        //extract id from request params
        const{id} = req.params;

        //extract title,description from request body
        const {title,description} = req.body;

        //update a todo object from the DB
        const todo = await Todo.findByIdAndUpdate({_id:id},
            {
                title,
                description,
                updatedAt:Date.now(),
            }

        )
        
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully updated`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json(
            {
                success:false,
                message:'Internal Server Error',
                err:err.message,
            }
        );
    }
}