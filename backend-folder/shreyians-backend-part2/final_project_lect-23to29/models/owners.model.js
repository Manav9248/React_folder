const mongoose = require('mongoose');

//userschema define
const ownerSchema  = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    products: {
        type:Array,
        default:[]
    },
    picture: String,
    gstin:Number
});

// exporting file
module.exports = mongoose.model('owner',ownerSchema);