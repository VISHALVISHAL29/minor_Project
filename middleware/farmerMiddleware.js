const{findFarmer}= require('../model/farmerModel')

const checkDuplicatefarmer = async(req,res,next)=>{
    const {phone,password}=req.body 
    const exist = await findFarmer(phone);

    if(exist){
        return res.status(400).json({message:"User already exist"});
    }

    next();
}

module.exports={checkDuplicatefarmer}