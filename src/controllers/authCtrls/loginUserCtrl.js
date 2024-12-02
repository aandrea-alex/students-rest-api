import { loginUser } from '../../services/auth/loginUser.js';
import { setupSession } from './setupSession.js';

export const loginUserCtrl = async (req, res) => {
  const session = await loginUser(req.body);

  //   res.cookie('refreshToken', session.refreshToken, {
  //     httpOnly: true,
  //     expires: new Date(Date.now() + ONE_DAY),
  //   });
  //   res.cookie('sessionId', session._id, {
  //     httpOnly: true,
  //     expires: new Date(Date.now() + ONE_DAY),
  //   });

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};
