import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// CREATE USERS
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// READ USERS
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);

export default routes;
