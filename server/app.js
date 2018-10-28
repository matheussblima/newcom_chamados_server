import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loadAllRoutes from './routes';

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/newcom_chamados_db',
  { useNewUrlParser: true },
  () => {
    console.log('Conected to mongodb');
  },
);

// middleware BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

loadAllRoutes(app);

export default app;
