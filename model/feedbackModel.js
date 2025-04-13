const pool = require('../config/db')

const createRating = async(id,rating,review,user_id,porduct_id)=>{
    try {
      const response = await pool.query(
          'INSERT INTO FEEDBACK (id,rating,review,user_id,porduct_id)  VALUES($1,$2,$3,$4,$5) RETURNING *',[id,rating,review,user_id,porduct_id]
      );
      return response.rows[0]
    } catch (error) {
      console.log("Cant Insert : ",error);
      throw error;
    }
  }

  module.exports={createRating}