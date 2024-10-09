import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://gargeerajput2704:Aditya007@cluster0.w34wp.mongodb.net/food-web').then(()=>console.log("DB connected"));
}