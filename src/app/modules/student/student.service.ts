import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentInToBD = async (student: Student) => {
  const result = await StudentModel.create(student); //mongoose built-in statice methods
  return result;
};

//make a Business logic
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// code for get a single id from db and postman:
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentInToBD,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
