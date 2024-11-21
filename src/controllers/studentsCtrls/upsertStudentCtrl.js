import { updateStudent } from '../../services/students/updateStudent.js';
import createHttpError from 'http-errors';

export const upsertStudentCtrl = async (req, res, next) => {
  const { id } = req.params;

  const result = await updateStudent(id, req.body, {
    upsert: true,
  });

  if (!result) {
    throw createHttpError(404, 'Student not found');
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a student!`,
    data: result.student,
  });
};
