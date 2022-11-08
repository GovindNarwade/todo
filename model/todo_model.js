const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    todoId:{
    type:Number
},
Title:{
    type:String
},
   Description:{
        type:String, 
    }
},{
timestamps:true
})
module.exports = mongoose.model("todo",todoSchema)