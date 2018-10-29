import express from 'express';
import { StatusTaskController } from '../controllers';

const app = express();

app.post('/status-task', StatusTaskController.post);
app.get('/status-task', StatusTaskController.getAll);

export default app;
