import { StudentsCollection } from '../../db/models/student.js';
import { calculatePaginationData } from '../../utils/calculatePaginationData.js';

// export const getAllStudents = async () => {
//   const students = await StudentsCollection.find();
//   return students;
// };

export const getAllStudents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = StudentsCollection.find();
  const studentsCount = await StudentsCollection.find()
    .merge(studentsQuery)
    .countDocuments();

  const students = await studentsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(studentsCount, perPage, page);

  return {
    ...paginationData,
    data: students,
  };
};
