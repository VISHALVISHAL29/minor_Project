//authMiddleware
const jwt = require('jsonwebtoken')
const {findUser}=require('../model/userModel')

const checkDuplicateuser = async(req,res,next)=>{
    const {email} = req.body;
    const exist = await findUser(email);

    if(exist){
        return res.status(400).json({message:'User already exist'})
    }
    
    next();
}

module.exports = checkDuplicateuser