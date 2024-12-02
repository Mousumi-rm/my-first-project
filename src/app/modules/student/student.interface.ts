import { Model } from "mongoose";


// 1. Create an interface representing a document in MongoDB.
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  father: {
    fatherName: string;
    fatherOccupation: string;
    fatherPhoneNo: string;
    fatherEmail?: string;
  };
  mother: {
    MotherName: string;
    motherOccupation: string;
    motherPhoneNo: string;
    motherEmail?: string;
  };
};

export type TLocalGuardian = {
  relativeName: string;
  relationship: string;
  contactNumber: string;
  occupation: string;
};



export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female'|'Other';
  birthDay: string;
  email: string;
  contactNo?:string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  isActive: 'true' | 'block';
};

// customer instance method properties and check the user in the databases or not.
// the user exists in the database or not.
export type StudentMethods = {
   isUserExists(id:string):Promise<TStudent | null>;
}  

export type StudentModel = Model<
TStudent,
Record<string,never>, 
StudentMethods >;
