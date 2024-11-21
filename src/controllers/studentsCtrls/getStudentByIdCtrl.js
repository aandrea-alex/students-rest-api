import createHttpError from 'http-errors';
import { getStudentById } from '../../services/students/getStudentById.js';

export const getStudentByIdCtrl = async (req, res, next) => {
  const { id } = req.params;

  const contact = await getStudentById(id);
  if (!contact) {
    throw createHttpError(404, 'Student not found');
  }

  res.send({
    status: 200,
    message: `Successfully found student with id ${id}!`,
    data: contact,
  });
};
