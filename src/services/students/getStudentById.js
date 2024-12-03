import { StudentsCollection } from '../../db/models/student.js';

export const getStudentById = async (id) => {
  const student = await StudentsCollection.findById(id);
  return student;
};
