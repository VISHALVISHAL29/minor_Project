const jwt = require('jsonwebtoken');
const pool = require('../config/db')

const userInofrmation = async(req,res)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()});
        }
        const token = await req.header.authorization?.split('.')[1];
        if(!token) return res.status(401).json({message:"No token Provided"});
    
        const decode = jwt.verify(token,process.env.JWT_Secret_Key);
        const userId = decode.id;
        const result = await pool.query("SELECT id, fname, lname, phone FROM farmer WHERE id = $1", [userId]);
            if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    
            res.status(200).json(result.rows[0]);
        
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports={userInofrmation}