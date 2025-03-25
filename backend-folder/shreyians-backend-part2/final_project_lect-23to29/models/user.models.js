const mongoose = require('mongoose');

//userschema define
const userSchema  = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart: {
    type: Array,
    default: []
    },
    orders: {
        type:Array,
        default:[]
    },
    contact: Number,
    picture: String
});

// exporting file
module.exports = mongoose.model('user',userSchema);