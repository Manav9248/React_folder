//by using user model, we can create, read, delte and update
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //datas
    username:String,
    email: String,
    password: String,
    age:Number,

    gender:{ // this is good practise {}
        type:String,
        enum:['male','female']
    }
})

//important
const userModel = mongoose.model('user',userSchema)


//export
module.exports = userModel
