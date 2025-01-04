import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagnoseWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    phone_no:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHER"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }

},{timestamps:true})


export const patient = mongoose.model("Patient",patientSchema);