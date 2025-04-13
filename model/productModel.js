const pool = require('../config/db')

const createProduct = async(name,price,category,description,harv_date,prod_date,farmer_id)=>{
   try {
    const result = await pool.query(
        'INSERT INTO PRODUCTS (name,price,category,description,harvest_date,prod_date,farmer_id)  VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id',
        [name,price,category,description,harv_date,prod_date,farmer_id]
    );
    return result.rows[0];
   } catch (error) {
      console.log("Can't Insert :",error);
      throw error;
   }

}


const searchProduct = async(product_name)=>{
  try {
    const products = await pool.query(
      `SELECT * FROM PRODUCTS 
       WHERE name = $1`,[product_name]
    )
    return products.rows[0]
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports={createProduct,searchProduct}