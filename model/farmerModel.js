//farmer model 
const pool = require('../config/db')

const creatfarmer = async(id,fname,lname,number,password,location)=>{
    try {
        const result = await pool.query(
            'INSERT INTO FARMER(id,fname,lname,phone,password,location) VALUES($1,$2,$3,$4,$5,ST_GeomFromGeoJSON($6)) RETURNING id',
            [id,fname,lname,number,password,JSON.stringify(location)]
        )

        return result.rows[0]
    } catch (error) {
        console.log("Error Entering data : " , error);
        throw error;
    }
}

const findFarmer = async(phone,password)=>{
    try {
        const result = await pool.query(
            `SELECT * FROM FARMER
             WHERE PHONE =$1`,[phone]
        )
       return result.rows[0]
    } catch (error) {
        console.log("Can't find user : ",error);
        throw error
    }
}

module.exports={creatfarmer,findFarmer}