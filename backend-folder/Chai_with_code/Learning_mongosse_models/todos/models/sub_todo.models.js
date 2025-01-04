import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  // data will be come here
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{ // tracking the user 
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  }

},{timestamps:true})

const subtodo = mongoose.model('subTodo',subTodoSchema);

//export
module.exports = subtodo
