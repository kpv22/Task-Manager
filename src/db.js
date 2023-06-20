import mongoose from "mongoose";
import { DB_USER, DB_PASSWORD, DB_NAME, DB } from './config.js';

 const connectDB = async () =>{
try {
     await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`)
     console.log("DB is connected");
} catch (error) {
    console.log(error);
}
}

export default connectDB