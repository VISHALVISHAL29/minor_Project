//farmer controller
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const { creatfarmer, findFarmer } = require('../model/farmerModel')

const signup = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }

        const { fname, lname, phone, password, location } = req.body;
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const id = uuidv4()

        const farmer = await creatfarmer(id, fname, lname, phone, hashedPassword, location)
        const token = jwt.sign({id:farmer.id},process.env.JWT_Secret_Key,{expiresIn:'72h'});
        return res.status(200).json({message:"User Created Successful", userId: farmer.id, token})

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const login = async(req,res)=>{
    try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()});
        }

        const {phone,password}=req.body
        const farmer = await findFarmer(phone);
        if(!farmer){
            return res.status(404).json({message:"User Doesn't Exist"})
        }

        const compair = await bcrypt.compare(password,farmer.password)
        if(!compair){
            return res.status(401).json({message:"Invalid Password"})
        }

        const token = jwt.sign({id:farmer.id},process.env.JWT_Secret_Key,{expiresIn:'72h'})
        return res.status(200).json({message:"Authentication Successful", userId: farmer.id, token})

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports={signup,login}