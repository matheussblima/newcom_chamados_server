import express from 'express';
import { TaskController } from '../controllers';

const app = express();

//POST
app.post('/task', TaskController.post);

export default app;
