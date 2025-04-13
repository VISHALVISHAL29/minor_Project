const express = require('express')
const router = express.Router();
const {userInofrmation} = require('../controller/userController')

router.get('/user-information',userInofrmation)

module.exports = router;