import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import BackgroundImg from "@/components/BackgroundImg";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom"
import axios from "axios";



function Signup() {

  // State for inputs
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const NavigationHandler = () => {
    navigate("/Login");
  };

  const SignupHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user-auth/signup",{
        fname,
        lname,
        email,
        password,
        number,
        address,
      })

      if (response.status === 201) {
        alert("Signup Successful!");
        navigate("/Login"); // Redirect to login after signup
      }
    } catch (error) {
      console.error("Signup Failed:", error.response?.data || error.message);
      alert("Signup Failed! Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <BackgroundImg />
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center absolute top-[20px] left-1/2 transform -translate-x-1/2 bg-white rounded-full w-24 h-24 shadow-lg overflow-hidden z-20">
        <Logo />
      </div>

      {/* Signup Card */}
      <Card className="w-[350px] p-6 bg-white bg-opacity-80 shadow-lg backdrop-blur-lg relative z-10 mt-24">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="fname"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)} // ✅ FIXED
                />
                <Input
                  id="lname"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                />
                <Input
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  id="passwd"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  id="number"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Input
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button onClick={SignupHandler}>Signup</Button>
        </CardFooter>
      </Card>

      {/* Login Text Below Card */}
      <div className="mt-4 text-center">
        <span className="text-neutral-950 font-medium">Already a User? </span>
        <button
          className="text-blue-600 underline font-medium"
          onClick={NavigationHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
