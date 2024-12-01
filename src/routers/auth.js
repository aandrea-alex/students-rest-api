import { Router } from 'express';
import authCtrls from '../controllers/authCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(authCtrls.registerUserCtrl),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(authCtrls.loginUserCtrl),
);

router.post('/logout', ctrlWrapper(authCtrls.logoutUserCtrl));

export default router;
