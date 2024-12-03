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

import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();

router.use(authenticate);

router.get(
  '/',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(studentsCtrls.getAllStudentsCtrl),
);

router.get(
  '/:id',
  isValidId,
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  ctrlWrapper(studentsCtrls.getStudentByIdCtrl),
);

router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(studentsCtrls.createStudentCtrl),
);

router.delete(
  '/:id',
  isValidId,
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(studentsCtrls.deleteStudentCtrl),
);

router.put(
  '/:id',
  isValidId,
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(studentsCtrls.upsertStudentCtrl),
);

router.patch(
  '/:id',
  isValidId,
  checkRoles(ROLES.TEACHER),
  validateBody(updateStudentSchema),
  ctrlWrapper(studentsCtrls.patchStudentCtrl),
);

export default router;
