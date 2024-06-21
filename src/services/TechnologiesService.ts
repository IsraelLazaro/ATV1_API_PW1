import { dataBase, TechnologiesType, BodyType} from "../dataBase/db";
import { v4 as uuid } from 'uuid';

export class TechnologieService{
    postTechnologie = (userName: string, title: string, deadline: string)=>{
        const user = dataBase.find(user => user.username === userName) as BodyType;
            const technology: TechnologiesType = {
                id: uuid(), 
                title:title,
                studeid: false,
                deadline: new Date(deadline),
                created_at: new Date()
            };
        user.technologies.push(technology);
        return;
    };
    getAllTechnologies = (userName: string)=>{
        const user = dataBase.find(user => user.username === userName) as BodyType;
            return user.technologies;
    };
    putTechnologies = (id:string, userName:string, title:string, deadline:Date)=>{
        const user = dataBase.find(user => user.username === userName) as BodyType;
        const technologyUpdate = user.technologies.find(technology => technology.id == id) as TechnologiesType;
        if(!technologyUpdate){
            throw new Error(`TECHNOLOGY NOT EXISTS`);
        };
        if(technologyUpdate.title==title && technologyUpdate.deadline==deadline){
            throw new Error(`TECHNOLOGY ${title} ALREADY EXISTS`);
        };
        technologyUpdate.title = title;
        technologyUpdate.deadline = deadline;
        return;
    };
    patchTechnologies = (id:string, userName:string)=>{
        const user = dataBase.find(user => user.username === userName) as BodyType;
        const technologyUpdate = user.technologies.find(technology => technology.id == id) as TechnologiesType;
        if(!technologyUpdate){
            throw new Error(`TECHNOLOGY NOT EXISTS`);
        };
        if(technologyUpdate.studeid==true){
            technologyUpdate.studeid = false;
            return;
        };
        if(technologyUpdate.studeid==false){
            technologyUpdate.studeid = true;
            return;
        };        
    };
    deleteTchnologies = (id:string, userName:string)=>{
        const user = dataBase.find(user => user.username === userName) as BodyType;
        const technologyDelete = user.technologies.findIndex(technology => technology.id == id);        
        if(technologyDelete==-1){
            throw new Error(`TECHNOLOGY NOT EXISTS`);
        };
        user.technologies.splice(technologyDelete, 1);
        return;
    };
};