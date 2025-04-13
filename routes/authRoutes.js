//authRoutes
const express = require('express')
const {signup,login} = require('../controller/authController')
const checkDuplicateuser = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/signup',checkDuplicateuser,signup);
router.post('/login',login);


module.exports=router