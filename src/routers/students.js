import { Router } from 'express';
import studentsCtrls from '../controllers/studentsCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(studentsCtrls.getAllStudentsCtrl));
router.get('/:id', ctrlWrapper(studentsCtrls.getStudentByIdCtrl));
router.post('/', ctrlWrapper(studentsCtrls.createStudentCtrl));
router.delete('/:id', ctrlWrapper(studentsCtrls.deleteStudentCtrl));
router.put('/:id', ctrlWrapper(studentsCtrls.upsertStudentCtrl));
router.patch('/:id', ctrlWrapper(studentsCtrls.patchStudentCtrl));

export default router;
