import { Router } from 'express';
import authCtrls from '../controllers/authCtrls/index.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

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

router.post('/refresh', ctrlWrapper(authCtrls.refreshUserSessionCtrl));

router.post(
  '/request-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(authCtrls.requestResetEmailCtrl),
);

router.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(authCtrls.resetPasswordCtrl),
);

export default router;
