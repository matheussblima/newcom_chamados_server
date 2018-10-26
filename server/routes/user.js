import express from 'express';
import { userController } from '../controllers';

const app = express();

app.post('/singup', userController.post);

export default app;
