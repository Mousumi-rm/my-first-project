// const express = require('express')
import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouter } from './app/modules/student/student.route';
const app: Application = express();

// parsers
app.use(express.json());
// cors
app.use(cors());

// application Router:
app.use('/app/v1/student', StudentRouter);
const getAController = (req: express.Request, res: express.Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

export default app;
