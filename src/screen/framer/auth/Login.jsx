import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Login() {

  const navigate = useNavigate();
  const [phone, setNumber] = useState(" ")
  const [password, setPassword] = useState(" ")

  const LoginHandler = async () => {
    try {
      if (!password || !phone ) {
        return alert("All fields are required");
      }

      const response = await axios.post("http://localhost:3000/farmer-auth/login",{
        phone,
        password
      })

      if(response.status===200){
        alert("Login Successful!");

        const { token } = response.data;
        localStorage.setItem(token)
        
        navigate("/farmer/products/create-new");
      }
    } catch (error) {
      console.error("Login Failed!",error.response?.data || error.message);
      alert("Login Failed! Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-end">
      <Card className="w-[350px] mr-2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  placeholder="Number"
                  value = {phone}
                  onChange = {(e)=>setNumber(e.target.value)} />
                <Input
                  id="password"
                  type ="password"
                  placeholder="Password"
                  value = {password}
                  onChange = {(e)=>setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={LoginHandler}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
