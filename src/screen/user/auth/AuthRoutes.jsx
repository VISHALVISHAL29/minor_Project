import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Use 'react-router-dom'
import Login from "./Login";
import Signup from "./Signup";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup/>} /> 
      <Route path="/Login" element={<Login/>} />
    </Routes>
  );
}

export default AuthRoutes;
