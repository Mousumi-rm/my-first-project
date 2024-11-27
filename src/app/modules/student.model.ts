import { Schema, model, connect } from 'mongoose';
import {  Guardian, LocalGuardian, Student, UserName } from '../modules/student/student.interface';



// 2. Create a Schema corresponding to the document interface.
const userNameSchema =  new Schema<UserName>({
     firstName:{type:String, required:true},
        middleName:{ type:String },
        lastName:{type:String,required:true}
        })

const localGuardianNameSchema =  new Schema<LocalGuardian>({ 
        relativeName: { type:String,required:true},
            relationship:{type:String, required:true },
            contactNumber:{type:String, required:true},
            occupation:{type:String},  
})

const guardianNameSchema = new Schema<Guardian>({
    father:{
        fatherName:{type:String, required:true}, 
        fatherOccupation:{type:String, required:true}, 
        fatherPhoneNo:{type:String, required:true},
        fatherEmail:{type:String},
   },
   mother:{
        MotherName:{type:String, required:true },
        motherOccupation:{ type:String, required:true},
        motherPhoneNo:{type:String, required:true},
        motherEmail:{ type:String, required:true},
    },
})

const studentSchema = new Schema<Student>({
    id:{
        type:String,
        required:true,
        unique:true,
    },
     name:{
        type:userNameSchema,
         required:true,
     },

    gender:{
        type:String,
        enum:["male","female"],
        required:true,

    },
   
    birthDay: { type: String, required: true },
    email:{  type:String,required:true},
    emergencyContactNo:{type:String, required:true},
    presentAddress:{ type:String,required:true},
    permanentAddress:{  type:String, },

    guardian:{
           type:guardianNameSchema,
           required:true,
        },

    localGuardian:{
        type:localGuardianNameSchema,
        required:true,
    },
                     
    isActive:{
        type:String,
        enum:['true','block'],
        required:true,
        }

})

// 3. Create a Model.we are changre only the const name(StudentModel)but 
// not change the "Student"cos this "Student" related  database 

export const StudentModel = model<Student>("Student", studentSchema);