import { Request, Response } from 'express';
import { StudentService } from './student.service';
import { resourceLimits } from 'worker_threads';

// main part for the student controller:
const  createStudent =async(req:Request, res:Response) => {
    try{
        const {student : studentData} = req.body; 
    // we will call the service function to send the  data.
    const result = await  StudentService.createStudentInToBD(studentData);

    // send response
   res.status(200).json({
    success:true,
    message: "Student created successfully",
    data: result,
});

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:error,
        })
    }
    
    
};

// second part of the controller for sub root api
const getAllStudent =async (req:Request,res:Response) => {
    try{
    // we will call the service function to send the  data.
        const result = await StudentService.getAllStudentFromDB();
        //send the response:
        res.status(200).json({
            success:true,
            message:"All student  retrieve successfully",
            data:result,
        }) 
    }catch(error){
        console.log(error);
    }
}

// code for get a single id from the Db and postman:
const getSingleStudent  = async(req:Request,res:Response) =>{
    try{
        const {studentId} = req.params;
        const result = await StudentService.getSingleStudentFromDB(studentId);
       // send the response
        res.status(200).json({
            success:true,
            message:"Single student  retrieve successfully",
            data:result
        })
    }catch(error){
       res.status(500).json({
        success:false,
        message:"Something went wrong",
        error:error,
       })
    }
    
}

export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent 
};

