import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./screen/user/auth/AuthRoutes";
import FarmerRoutes from './screen/framer/routes/FarmerRoutes';



function App() {

  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="/farmer/*" element={<FarmerRoutes/>}/>
    </Routes>
  )
}

export default App
