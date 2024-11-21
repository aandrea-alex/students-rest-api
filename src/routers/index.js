import express from 'express';
import studentsRouter from './students.js';

const routers = express.Router();
routers.use('/students', studentsRouter);

export default routers;
