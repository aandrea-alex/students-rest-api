import { deleteStudent } from '../../services/students/deleteStudent.js';
import createHttpError from 'http-errors';

export const deleteStudentCtrl = async (req, res) => {
  const { id } = req.params;

  const student = await deleteStudent(id);

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(204).send();
};
