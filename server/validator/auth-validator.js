const {z} = require('zod')

// Login Validator
const loginSchema = z.object({
    email:z
    .string({required_error:"Email is requires"})
    .trim()
    .email({message:"Invaild email address"})
    .min(3,{message:"Email must be alteast 3 chars"})
    .max(25,{message:"Email must not be more than 25 chars"}),
    password:z
    .string({required_error:"Password is requires"})
    .trim()
    .min(3,{message:"Password must be alteast 3 chars"})
    .max(25,{message:"Password must not be more than 25 chars"})
})

// Registration Validator
const signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is requires"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chars"})
    .max(25,{message:"username must not be more than 25 chars"}),
   
    phone:z
    .string({required_error:"Phone is requires"})
    .trim()
    .min(10,{message:"Phone no  must be alteast 10 chars"})
    .max(20,{message:"Phone must not be more than 20 chars"}),
   
}) 

module.exports = {signupSchema,loginSchema};