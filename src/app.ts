// const express = require('express')
import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parsers
app.use(express.json());
// cors
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.json('Hello World!');
});

export default app;
