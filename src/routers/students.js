import { Router } from 'express';
import studentsCtrls from '../controllers/studentsCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(studentsCtrls.getAllStudentsCtrl));
studentsRouter.get('/:id', ctrlWrapper(studentsCtrls.getStudentByIdCtrl));
studentsRouter.post('/', ctrlWrapper(studentsCtrls.createStudentCtrl));
studentsRouter.delete('/:id', ctrlWrapper(studentsCtrls.deleteStudentCtrl));
studentsRouter.put('/:id', ctrlWrapper(studentsCtrls.upsertStudentCtrl));
// studentsRouter.patch(':id', ctrlWrapper(studentsCtrls.patchContactCtrl));

export default studentsRouter;
