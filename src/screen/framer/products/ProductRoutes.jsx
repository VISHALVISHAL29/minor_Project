import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './AddProduct'

function ProductRoutes() {
  return (
    <Routes>
        <Route path='create-new' element={<AddProduct/>}/>
    </Routes>
  )
}

export default ProductRoutes