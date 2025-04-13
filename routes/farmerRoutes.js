const express = require('express')
const { signup, login } = require('../controller/farmerController')
const {checkDuplicatefarmer} = require('../middleware/farmerMiddleware')
const router = express.Router()


router.post('/singup',checkDuplicatefarmer,signup)
router.post('/login',login)

module.exports=router