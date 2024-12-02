import { z } from 'zod';

// Validation for the name object
const userNameValidationSchema = z.object({
  firstName: z
    .string().min(1)
    .max(20, 'First name should not exceed 20 characters')
    .refine(
      (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
      'First name should start with an uppercase letter'
    ),
    lastName: z.string().min(1),
    middleName: z.string().optional(),
});

// Validation for guardian
const guardianValidationSchema = z.object({
  father: z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string(),
    fatherPhoneNo: z.string(),
    fatherEmail: z.string().email().optional(),
  }),
  mother: z.object({
    MotherName: z.string().min(1),
    motherOccupation: z.string(),
    motherPhoneNo: z.string(),
    motherEmail: z.string().email().optional(),
  }),
});

// Validation for local guardian
const localGuardianValidationSchema = z.object({
    relativeName: z.string().min(1),
    relationship: z.string().min(1),
    contactNumber: z.string(),
    occupation: z.string(),
  });

// Main Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1),
  name: userNameValidationSchema,
  email: z.string().email().toLowerCase(), // Ensures email is stored in lowercase
  gender: z.enum(['male', 'female', 'Other']),
  contactNo: z.string().optional(),
  bloodGroup:z
  .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(), 
  birthDay: z.string(),
  emergencyContactNo: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  isActive: z.enum(['true', 'block']),
});

// Export the schema for use
export default studentValidationSchema

