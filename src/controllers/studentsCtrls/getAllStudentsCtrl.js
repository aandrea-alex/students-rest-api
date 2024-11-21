import { getAllStudents } from '../../services/students/getAllstudents.js';

export const getAllStudentsCtrl = async (req, res, next) => {
  const studs = await getAllStudents();
  res.send({
    status: 200,
    message: 'Successfully found students!',
    data: studs,
  });
};
