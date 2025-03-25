const mongoose = require('mongoose');

//userschema define
const ownerSchema  = mongoose.Schema({
    fullname:{
    type: String,
    minLength:3,
    trim:true,
},
    email:String,
    password:String,
    products: {
        type:Array,
        default:[]
    },
    picture: String,
    gstin:String
});

// exporting file
module.exports = mongoose.model('owner',ownerSchema);