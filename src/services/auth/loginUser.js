import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { SessionsCollection } from '../../db/models/session.js';
import { UsersCollection } from '../../db/models/user.js';
import { createSession } from './createSession.js';

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isEqual = await bcrypt.compare(payload.password, user.password);
  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  await SessionsCollection.deleteOne({ userId: user._id });
  const session = createSession();

  return await SessionsCollection.create({
    userId: user._id,
    ...session,
  });
};
