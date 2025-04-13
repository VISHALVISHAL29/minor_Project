const{Pool} = require('pg')
const dontenv = require('dotenv')
dontenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE
})

pool.connect()
.then(()=>console.log("Connected to DataBase"))
.catch((err)=>{console.log("Cannot Connect to DataBase :",err.message)})


module.exports=pool;