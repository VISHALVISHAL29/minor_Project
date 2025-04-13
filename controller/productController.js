//Product Controller
const { v4: uuidv4 } = require('uuid')
const { createProduct} = require('../model/productModel')
const { validationResult } = require('express-validator')

const addProduct = async (req, res) => {
    try {
        //check if the request is valid or not
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ message: error.array() })
        }
        //destructring
        const { name, price, category, description, harvest_date, prod_date,farmer_id } = req.body;
        //genrating unique id
        // const productID = uuidv4();

        const product = await createProduct(name, price, category, description, harvest_date, prod_date,farmer_id)
    return res.status(200).json({message:'Product Creataed Successfully',productId:product.id,farmerId:product.farmer_id})

    } catch (error) {
      console.error(error);
      return res.status(500).json({message:'Server Error'})
    }
}

module.exports={addProduct}