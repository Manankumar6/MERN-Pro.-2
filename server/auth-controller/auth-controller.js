const User = require('../models/user')
const bcrypt = require("bcrypt");

// Home login
const home = async (req, res) => {
    try {
        res.status(200).json({ message: "welcome to Login Page" })
    } catch (error) {
        console.log(error)
    }
}

// User registration logic
const register = async (req, res) => {
    try {
        const { username, password, phone, email } = req.body
        const userExist = await User.findOne({ email });
        //    If user already exist
        if (userExist) {
            return res.status(400).send("Email Already Exist")
        }
        //    Hashing password
       
        const userCreated = await User.create({ username, email, password, phone })

        res.status(200).json({ msg: "Registration successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString() })
    } catch (error) {
        console.log("Internal Server Error")
    }
}

// User login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentails" })
        }
    
        const isPasswordValid = await userExist.comparePassword(password)

        if (isPasswordValid) {
            res.status(200).json({ msg: "Login successfull", token: await userExist.generateToken(), userId: userExist._id.toString() })
        }else{
            res.status(401).json({message:"Invaild email or password"})
        }
    } catch (error) {
        console.log("Internal Server Error")
    }
}

// User Logic to send user data
const user = async(req,res)=>{
    try {
        const userData = req.user;
  
        res.status(200).json({userData})
    } catch (error) {
        console.log("Error from user side ", error)
    }
}


module.exports = { home, register, login, user }