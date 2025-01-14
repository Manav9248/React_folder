import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// 2 things is important, when we are connecting to Database (DB).
// First things is that it is compulsary to use async-wait, because database are in another continent it takes times to communicate with database, that's why we use async-wait.
// Second things is that, we should use try and catch because, it's a good practise and it can through error while communicating to databse, so that's why we use try and catch.

const connectDB = async () => {
    try{
      const connectionInstance = await mongoose.connect
      (`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: 
        ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB connection error ",error);
        process.exit(1)
    }
}

export default connectDB