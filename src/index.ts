import { TechnologiesController } from './controllers/TechnologiesController';
import express, {Request, Response} from 'express';
import { UserController } from './controllers/UserController';
import { checkExistUserAccount } from './middlewares/checkExistsUserAccount';

const userController = new UserController();
const technologiesController = new TechnologiesController();
const server = express();
server.use(express.json());

server.post('/users', userController.createUser);
server.get('/technologies', checkExistUserAccount, technologiesController.getAllTechnologies);
server.post('/technologies', checkExistUserAccount, technologiesController.postTechnology);
server.put('/technologies/:id', checkExistUserAccount, technologiesController.putTechnologies);
server.patch('/technologies/:id/studied', checkExistUserAccount, technologiesController.patchTechnologies);
server.delete('/technologies/:id', checkExistUserAccount, technologiesController.deleteTchnologies);

server.listen(3000, () => {
    console.log('Server Online On Port 3000')
});