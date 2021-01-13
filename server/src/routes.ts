import express from 'express';
import classesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();

const classesControllers = new classesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)


export default routes;