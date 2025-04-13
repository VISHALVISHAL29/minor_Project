const pool = require('../config/db')
const { getCordsForAddress } = require("../util/location");

const createUser = async(id,Fname,lname,number,email,password,location)=>{

  const coordinates = await getCordsForAddress(location);
  if (!coordinates) throw new Error("Failed to get coordinates");
    try {
      const result = await pool.query(
        'INSERT INTO USERS (fname,lname,phone,email,password,location,id) VALUES($1,$2,$3,$4,$5,ST_SetSRID(ST_MakePoint($6, $7), 4326)::geography,$8) RETURNING *',
        [Fname,lname,number,email,password,coordinates.lat,coordinates.lon,id]
      );
      return result.rows[0];
    } catch (error) {
        console.log("Error inserting user : ",error);
        throw error;
        
    }
}

const findUser = async(email)=>{
  try {
    const result = await pool.query(
    'SELECT * FROM USERS WHERE EMAIL = $1',[email]
    );
    return  result.rows[0];
  } catch (error) {
    console.log("Error finding user : " , error);
    throw error;
  }
}

module.exports={createUser,findUser}