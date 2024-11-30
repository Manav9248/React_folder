//by using user model, we can create, read, delte and update

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:String,
    email: String,
    password: String,

    age:Number,
    gender:{
        type:String,
        enum:['male','female']
    }
})

//important
const userModel = mongoose.model('user',userSchema)


//export
module.exports = userModel
