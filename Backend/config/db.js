import mongoose from "mongoose";


 export const connectDB= async ()=>{
    await mongoose.connect("mongodb+srv://getfood:831881@cluster0.jqyfnzh.mongodb.net/Food-Delivery-App").then(()=>console.log("DB Connected"));
}