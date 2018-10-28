import express from 'express';
import { TaskController } from '../controllers';

const app = express();

//POST
app.post('/task', TaskController.post);
//GET
app.get('/task', TaskController.getAll);

export default app;
