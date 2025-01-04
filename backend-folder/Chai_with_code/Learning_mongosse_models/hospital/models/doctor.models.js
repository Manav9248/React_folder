import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    expierenceInYear:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        },
    ]

},{timestamps:true})


export const doctor = mongoose.model("Doctor",doctorSchema);