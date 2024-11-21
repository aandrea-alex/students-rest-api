import { updateStudent } from '../../services/students/updateStudent.js';
import createHttpError from 'http-errors';

export const patchStudentCtrl = async (req, res, next) => {
  const { id } = req.params;
  const result = await updateStudent(id, req.body);

  if (!result) {
    throw createHttpError(404, 'Student not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a student!`,
    data: result.student,
  });
};
