import { requestResetToken } from '../../services/auth/requestResetToken.js';

export const requestResetEmailCtrl = async (req, res) => {
  await requestResetToken(req.body.email);
  res.json({
    message: 'Reset password email was successfully sent!',
    status: 200,
    data: {},
  });
};
