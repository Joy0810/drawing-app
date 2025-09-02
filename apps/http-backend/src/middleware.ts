import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload}  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET;

declare global{
    namespace Express{
        export interface Request{
            userId?:string
        }
    }
}

interface IJwtPayload extends JwtPayload{
    userId?:string
}

export function middleware(req:Request,res:Response,next:NextFunction){
    const token=req.headers["authorization"]??"";

    const decoded=jwt.verify(token,JWT_SECRET as string) as IJwtPayload;

    if(decoded){
        req.userId=decoded.userId as string;
        next();
    }
    else{
        res.status(403).json({
            message:"Unauthorized"
        })
    }
}