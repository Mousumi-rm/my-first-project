import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z]/)
    .messages({
      'string.max': 'First name should not exceed 20 characters',
      'any.required': 'First name is required',
      'string.pattern.base': 'First name should start with an uppercase letter',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string().required(),
});

const localGuardianNameValidationSchema = Joi.object({
  relativeName: Joi.string().required(),
  relationship: Joi.string().required(),
  contactNumber: Joi.string().required(),
  occupation: Joi.string().optional(),
});

const guardianNameValidationSchema = Joi.object({
  father: Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherPhoneNo: Joi.string().required(),
    fatherEmail: Joi.string().email().optional(),
  }),
  mother: Joi.object({
    MotherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherPhoneNo: Joi.string().required(),
    motherEmail: Joi.string().email().required(),
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': '{VALUE} is not a valid email address!',
      'any.required': 'Email is required',
    }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.only': '{VALUE} is not valid',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  birthDay: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().optional(),
  guardian: guardianNameValidationSchema.required(),
  localGuardian: localGuardianNameValidationSchema.required(),
  isActive: Joi.string()
    .valid('true', 'block')
    .required(),
});

export default studentValidationSchema;



// student.controller.ts part

    // // Schema validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);
    // if (error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Validation failed',
    //     error: error.details,
    //   });
    // }
    // Call the service function to save the data
    // const result = await StudentService.createStudentInToBD(value);