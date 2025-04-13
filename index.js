//index.js
const express = require('express')
require('./config/db')
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes')
const farmerRoutes = require('./routes/farmerRoutes')
const {addProduct} = require('./controller/productController')
const userRoutes=require('./routes/userRoutes')
const cors = require('cors')

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT||5000

app.use('/user-auth',authRoutes)
app.use('/farmer-auth',farmerRoutes)
app.use('/user',userRoutes)
app.post('/addproduct',addProduct);


app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.listen(port,()=>{
  console.log(`Server starting on Port ${port}`);
})