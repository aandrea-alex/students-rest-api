import { Router } from 'express';
import studentsCtrls from '../controllers/studentsCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';

import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(studentsCtrls.getAllStudentsCtrl));
router.get('/:id', isValidId, ctrlWrapper(studentsCtrls.getStudentByIdCtrl));

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(studentsCtrls.createStudentCtrl),
);

router.delete('/:id', isValidId, ctrlWrapper(studentsCtrls.deleteStudentCtrl));

router.put(
  '/:id',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(studentsCtrls.upsertStudentCtrl),
);

router.patch(
  '/:id',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(studentsCtrls.patchStudentCtrl),
);

export default router;
