import { StudentsCollection } from '../../db/models/student.js';

export const getStudentById = async (studentId) => {
  const student = await StudentsCollection.findById(studentId);
  return student;
};
