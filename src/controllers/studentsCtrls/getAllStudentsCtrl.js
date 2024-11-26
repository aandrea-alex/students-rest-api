import { getAllStudents } from '../../services/students/getAllstudents.js';
import { parsePaginationParams } from '../../utils/parsePaginationParams.js';

// export const getAllStudentsCtrl = async (req, res, next) => {
//   const studs = await getAllStudents();
//   res.send({
//     status: 200,
//     message: 'Successfully found students!',
//     data: studs,
//   });
// };

export const getAllStudentsCtrl = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  console.log(page, perPage);
  const students = await getAllStudents({
    page,
    perPage,
  });

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};
