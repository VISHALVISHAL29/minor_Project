import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function AuthRoutes() {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}

export default AuthRoutes