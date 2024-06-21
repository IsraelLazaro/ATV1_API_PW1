import { Request, Response, NextFunction } from "express";
import { dataBase } from "../dataBase/db";

export const checkExistUserAccount = (request:Request, response:Response, next: NextFunction)=>{
    const userName = request.headers.username as string;
    if(!userName){
        return response.status(400).json({message: `Necessário fornecer um nome de usuário!`});
    };
    const user = dataBase.find(user => user.username === userName);
    if(!user){
        return response.status(404).json({message: `User ${userName} not exists`})
    };
    return next();
};
    
