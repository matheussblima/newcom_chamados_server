import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

const app = express();
const PORT = 3000;

// middleware BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT);
