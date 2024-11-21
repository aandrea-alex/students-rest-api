import { StudentsCollection } from '../../db/models/student.js';

export const createStudent = async (payload) => {
  const student = await StudentsCollection.create(payload);
  return student;
};
