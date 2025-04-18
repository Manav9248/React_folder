import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId, // it is taking schema, which we already defined
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

export const product = mongoose.model('Product',productSchema);