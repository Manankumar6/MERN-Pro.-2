const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req,res,next)=>{
    const token = req.header('authorization');

    if(!token){
        return res.status(401).json({message:"Unathorized HTTP, Token Not Provided"})
    }
    const jwtToken = token.replace("Bearer","").trim();
   
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECURE);
  
        const userData = await User.findOne({email:isVerified.email}).select({password:0})
   
        req.user= userData;
        req.token = token;
        req.userId = userData._id
        next()
    } catch (error) {
        return res.status(401).json({message:"Unathorized HTTP, Token Not Provided"})
    }
}

module.exports = authMiddleware;