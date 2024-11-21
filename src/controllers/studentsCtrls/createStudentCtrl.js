import { createStudent } from '../../services/students/createStudent.js';

export const createStudentCtrl = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: student,
  });
};
