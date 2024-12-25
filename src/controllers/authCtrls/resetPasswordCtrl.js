import { resetPassword } from '../../services/auth/resetPassword.js';

export const resetPasswordCtrl = async (req, res) => {
  await resetPassword(req.body);
  res.json({
    message: 'Password was successfully reset!',
    status: 200,
    data: {},
  });
};
