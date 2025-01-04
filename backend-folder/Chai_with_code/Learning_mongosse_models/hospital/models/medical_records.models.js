import mongoose from "mongoose"

const medicalRecordsSchema = new mongoose.Schema({

},{timestamps:true})


export const medicalRecord = mongoose.model("MedicalRecord",medicalRecordsSchema);