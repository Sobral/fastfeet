import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

// CREATE USERS
routes.post('/users', UserController.store);

// READ USERS
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

export default routes;
