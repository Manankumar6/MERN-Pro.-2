const express = require('express');
const router = express.Router();
const authcontroller = require('../auth-controller/auth-controller')
const validate = require('../middleware/vaildate_middleware')
const {signupSchema,loginSchema} = require('../validator/auth-validator') 
const authMiddleware = require('../middleware/auth_middleware')

// router.get('/',(req,res)=>{
//     res.status(200).send("welcome to server side using router")
// })

router.route('/').get(authcontroller.home)
router.route('/register').post(validate(signupSchema),authcontroller.register)
router.route('/login').post(validate(loginSchema),authcontroller.login)
router.route('/user').get(authMiddleware,authcontroller.user)
module.exports = router;