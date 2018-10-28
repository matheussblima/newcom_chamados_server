import express from 'express';
import { UserController } from '../controllers';

const app = express();

app.post('/singup', UserController.post);

export default app;
