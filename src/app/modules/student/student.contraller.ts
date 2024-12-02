import { Request, Response } from 'express';
import { StudentService } from './student.service';
// import studentValidationSchema from './student.joi.validation'; // Fix typo here
import studentValidationSchema from './student.zod.validation'
// import {studentValidationSchema} from './student.zod.validation'
// 1
// Main part for the student controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
     // Schema validation using zod
      const zodParsedData = studentValidationSchema.parse(studentData)  
     // Call the service function to save the data
      const result = await StudentService.createStudentInToBD(zodParsedData);
       // Send response
      res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
    } catch (error: any) {
    res.status(500).json({
      success: false,
      message:error.message || 'Something went wrong',
      error: error,
    });
  }
};
// 2
// Second part of the controller for sub-root API
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All students retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};
// 3
// Code to get a single student by ID
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};
// 4
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
