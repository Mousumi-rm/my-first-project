import { Student } from '../student.model';
import { TStudent } from './student.interface';

// mongoose statice -build-in methods
// const createStudentInToBD = async (student: Student) => {
   //mongoose built-in statice methods
//   const result = await StudentModel.create(student);
  // return result;
// };


//  mongoose custom made instance methods:
const  createStudentInToBD  = async(studentData:TStudent) =>{
  const student = new Student(studentData);//create an instance of StudentModel
   
  if(await student.isUserExists(studentData.id)){
    throw new Error('User already exists!');
  } 
  const result = await student.save();//the built in instance methods
  return result;
}

//make a Business logic
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
// code for get a single id from db and postman:
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentInToBD,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
 