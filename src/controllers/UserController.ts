import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{
    createUser = (request: Request, response:Response) =>{
        const userService = new UserService();
        const {name, userName}= request.body;
        if(!name || !userName){
            return response.status(400).json({message: "Preencha todos os dados!"});
        };
        try {
            userService.createUser(name, userName);
            return response.status(201).json({ message: `Usuário ${userName} criado com sucesso`});
        } catch (error:any) {
            console.log(error);
            return response.status(400).json({ message: error.message});
        }; 
    };
};