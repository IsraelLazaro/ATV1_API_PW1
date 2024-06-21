import { Request, Response } from "express";
import { TechnologieService } from "../services/TechnologiesService";

const tecnologyService = new TechnologieService();

export class TechnologiesController{
    postTechnology = (request: Request, response:Response) =>{
        const username: string = request.headers.username as string; 
        const {title, deadline} = request.body;
        try {
            tecnologyService.postTechnologie(username, title, deadline);
            return response.status(201).json(`Technology ${title} has been added to user technologies ${username}`);      
        } catch (error:any) {
            console.log(error);
            return response.status(404).json({ message: error.message });
        };
    };
    getAllTechnologies = (request: Request, response:Response) =>{
        const username: string = request.headers.username as string;
        const technologies = tecnologyService.getAllTechnologies(username);
        if(technologies.length==0){
            return response.status(404).json({ error: `No technology found for User ${username}`});
        };
        return response.status(200).json(technologies);
    };
    putTechnologies = (request: Request, response:Response) =>{
        const {id} = request.params;
        const username: string = request.headers.username as string;
        const {title, deadline} = request.body;
        try {
            tecnologyService.putTechnologies(id, username, title, deadline);
            return response.status(200).json(`${title} technology has been successfully updated`);
        } catch (error:any) {
            return response.status(404).json({message:error.message});
        };
    };
    patchTechnologies = (request: Request, response:Response) =>{
        const {id} = request.params;
        const username: string = request.headers.username as string;
        try {
            tecnologyService.patchTechnologies(id, username);
            return response.status(200).json(`The studied field has been changed`);
        } catch (error:any) {
            console.log(Error)
            return response.status(404).json({message:error.message});            
        };
    };
    deleteTchnologies = (request: Request, response:Response) =>{
        const {id} = request.params;
        const username: string = request.headers.username as string;
        try {
            tecnologyService.deleteTchnologies(id, username);
            return response.status(200).json(`Technology with id ${id} has been deleted`);
        } catch (error:any) {
            return response.status(404).json({message:error.message});            
        };      
    };
};