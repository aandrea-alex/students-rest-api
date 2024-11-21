import { StudentsCollection } from '../../db/models/student.js';

export const deleteStudent = async (id) => {
  const student = await StudentsCollection.findOneAndDelete({
    _id: id,
  });

  return student;
};
