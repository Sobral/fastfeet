import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';
import AdminAuth from './app/middlewares/adminAuth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/users', AdminAuth, UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', AdminAuth, UserController.update);
routes.delete('/users/:id', AdminAuth, UserController.delete);

routes.post('/recipients', AdminAuth, RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.put('/recipients/:id', AdminAuth, RecipientController.update);

routes.delete('/recipients/:id', AdminAuth, RecipientController.delete);

export default routes;
