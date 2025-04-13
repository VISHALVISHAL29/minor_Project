import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AuthRoutes from '../auth/AuthRoutes'
import ProductRoutes from '../products/ProductRoutes'

function FarmerRoutes() {
  return (
    <Routes>
      <Route path='auth-/*' element={<AuthRoutes/>}/>
      <Route path='products/*' element={<ProductRoutes/>}/>
    </Routes>
  )
}

export default FarmerRoutes