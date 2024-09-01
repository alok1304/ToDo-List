import mongoose from "mongoose";
// import  dotenv  from "dotenv";
// dotenv.config();
// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

export const  connectDB = async () =>{

    await mongoose.connect(`mongodb+srv://alokkum97:alok9973@cluster0.fztia.mongodb.net/to-do-list`).then(()=>console.log("DB Connected"));
   
}