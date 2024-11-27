import express from "express";
import { StudentController } from "./student.contraller";


const router = express.Router();


// we  wil call the the controller function here.
router.post('/create-student',StudentController.createStudent);
// get form route:
router.get('/', StudentController.getAllStudent);
router.get('/:studentId',StudentController.getSingleStudent);

export const StudentRouter = router;