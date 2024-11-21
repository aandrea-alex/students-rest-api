import { Router } from 'express';
import studentsCtrls from '../controllers/studentsCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(studentsCtrls.getAllStudentsCtrl));
studentsRouter.get('/:id', ctrlWrapper(studentsCtrls.getStudentByIdCtrl));
studentsRouter.post('/', ctrlWrapper(studentsCtrls.createStudentCtrl));
// contactsRouter.delete('/contacts/:id', ctrlWrapper(deleteContactCtrl));
// contactsRouter.put('/contacts/:id', ctrlWrapper(upsertContactCtrl));
// contactsRouter.patch('/contacts/:id', ctrlWrapper(patchContactCtrl));

export default studentsRouter;
