const todo = require("../model/todo_model")
exports.CreatetodoDetails = async(req,res)=>{
const result = await todo.create({
    todoId:Math.floor((Math.random()*100000)+1),
    Title:req.body.Title,
    Description:req.body.Description,
    
})
res.json({
    success:true,
    message:"Create todo Details ",
    data:result,
})
}
exports.ViewtodoDetails = async(req,res)=>{
  try {
    const result = await todo.find()
    res.json({
        success:true,
        message:"View todo Details ",
        data:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:"Something Went Worng ",
        data:null,
    })
  }
    }
    exports.deletetodoDetails = async(req,res)=>{
        try {
            const result = await todo.findOneAndDelete({todoId:req.params.todoId})
            res.json({
                success:true,
                message:"Delete todo Details",
                data:null
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something  went wrong",
                data:null
            })  
        }
    }
    exports.updatetodoDetails = async(req,res)=>{
        try {
            const result = await todo.findOneAndUpdate({todoId:req.body.todoId} , req.body , {
                new: true,
                runValidators: true,})
            res.json({
                success:true,
                message:"update todo Details",
                data:result
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something  went wrong"+Error,
                data:null
            })  
        }
    }