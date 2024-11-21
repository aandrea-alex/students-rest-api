import express from 'express';
import studentRouters from './students.js';

const routers = express.Router();
routers.use('/students', studentRouters);

export default routers;
