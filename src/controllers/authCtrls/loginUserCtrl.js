import { loginUser } from '../../services/auth/loginUser.js';
import { setupSession } from './setupSession.js';

export const loginUserCtrl = async (req, res) => {
  const session = await loginUser(req.body);

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};
