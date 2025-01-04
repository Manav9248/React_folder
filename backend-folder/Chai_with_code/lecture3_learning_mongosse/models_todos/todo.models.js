import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    // datas will be store here
    content:{
        type:String,
        required:true,

    },
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    subTods:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"subTodo"
        }
    ] // Array of sub-todos
    
},{timestamps:true}); // timestamps tell when the object created and updated


const Todo = mongoose.model("todo",TodoSchema);

//exporting
module.exports = Todo;