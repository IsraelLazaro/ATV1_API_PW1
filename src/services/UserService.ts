import { dataBase, BodyType} from "../dataBase/db";
import { v4 as uuid } from 'uuid';

export class UserService{
    createUser = (name: string, userName: string)=>{
        const userCheck  = dataBase.find(user  => user.username === userName);
        if(userCheck){
            throw new Error(`O Nome de Usuário ${userName} já existe!`);
        };
        const user: BodyType = {
            id:uuid(),
            name: name,
            username: userName,
            technologies: []
        };
        dataBase.push(user) 
        };
};