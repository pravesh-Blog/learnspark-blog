
import mongoose from "mongoose";
export async function connectDB(){

 if(mongoose.connection.readyState===1){
    return
 }
  try{
   await mongoose.connect(process.env.MONGODB_URL);
   console.log("Database is connected");
  }catch(error){
    console.log(error);
  }
}