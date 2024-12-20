import { StudentMethods, StudentModel } from './student/student.interface';
import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from '../modules/student/student.interface';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    maxlength: [20, 'first name should not exceed 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        // Ensure the first letter is capitalized
        return value.charAt(0) === value.charAt(0).toUpperCase();
      },
      message: 'First name should start with an uppercase letter',
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});


const guardianNameSchema = new Schema<TGuardian>({
  father: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherPhoneNo: { type: String, required: true },
    fatherEmail: { type: String },
  },
  mother: {
    MotherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherPhoneNo: { type: String, required: true },
    motherEmail: { type: String, required: true },
  },
});

const localGuardianNameSchema = new Schema<TLocalGuardian>({
  relativeName: { type: String, required: true },
  relationship: { type: String, required: true },
  contactNumber: { type: String, required: true },
  occupation: { type: String },
});

const studentSchema = new Schema<TStudent, StudentModel,StudentMethods>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: '{VALUE} is not a valid email address!',
    },
    lowercase: true,
  },
  gender: {
    type: String,
    enums: {
      value: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
     },
   },
    contactNo: { type:String },  // Add `required` if it's mandatory
    bloodGroup: {
    type:String,
    enums:{
      value:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not valid',
     }   // Add `required` if it's mandatory
    },
      birthDay: { type: String, required: true },
      emergencyContactNo: { type: String, required: true },
      presentAddress: { type: String, required: true },
      permanentAddress: { type: String },

      guardian: {
        type: guardianNameSchema,
        required: [true,'guardian Name is required'],
      },

      localGuardian: {
        type: localGuardianNameSchema,
        required:[true,' Local Guardian Name is required'] ,
      },

      isActive: {
        type: String,
        enum: ['true', 'block'],
      },
    });

// 3. Create a Model.we are changer only the const name(StudentModel)but
// not change the "Student"cos this "Student" related  database
studentSchema.methods.isUserExists = async function(id:string){
  // const existingUser = await Student.findOne({id:id})
  const existingUser = await Student.findOne({ id });
   return existingUser 
}


// there is instance part of the model
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
