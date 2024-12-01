import express from 'express';
import studentRouters from './students.js';
import authRouter from './auth.js';

const routers = express.Router();
routers.use('/students', studentRouters);
routers.use('/auth', authRouter);

export default routers;
