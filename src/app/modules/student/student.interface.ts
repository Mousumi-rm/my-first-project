import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
    father:{
        fatherName:string; 
        fatherOccupation:string; 
        fatherPhoneNo:string;
        fatherEmail?:string;
   };
   mother:{
       MotherName:string
       motherOccupation:string;
       motherPhoneNo:string;
       motherEmail?:string;
   }
} 

export type  LocalGuardian = {
        relativeName: string;
        relationship:string;
        contactNumber:string;
        occupation:string
    
}

export type UserName = {
        firstName:string;
        middleName?:string;
        lastName:string
};

export type Student = {
    id:string;
    name: UserName;
    gender:"male" | "female" ;
    birthDay: string;
    email: string;
    contactNo?:string;
    emergencyContactNo:string;
    bloodGroup:"A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress:string;
    permanentAddress: string;
    guardian:Guardian;
    localGuardian:LocalGuardian;
    isActive:"true" | "block"
  }