const { v4: uuidv4 } = require('uuid')
const {createRating} = require('../model/feedbackModel')
const { validationResult } = require('express-validator')


const addRating = async(req,res)=>{
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
          return res.status(400).json({message:'Invalid Request',error:errors.array()})
      }
      const{rating,review}= req.body;
      // genrating unique id
      const ratingID = uuidv4();
      const result=await createRating(ratingID,rating,review,null,null);
      return res.status(200).json({message:"Rating Added",Id:result.id})
    } catch (error) {
      console.error(error);
      return res.status(500).json({message:'Server Error'})
    }
  }

module.exports={addRating}