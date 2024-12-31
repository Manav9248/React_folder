import mongose from 'mongoose'

const userSchema = new mongose.Schema({
   // data will be store here
    username:{ // good practise for storing datas
       
        //these are fields
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{timestamps:true}
)

const user = mongose.model("user",userSchema);

module.exports = user;