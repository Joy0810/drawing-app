import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { middleware } from "./middleware";

dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET;

const app=express();

app.put("/signup",(req,res)=>{

})

app.put("/signin",(req,res)=>{
    const userId=1;
    const token=jwt.sign({
        userId
    },JWT_SECRET as string)
})

app.put("/room",middleware,(req,res)=>{
    
})

app.listen(3001);