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

function Login() {
  const[email,setEmail] = useState(" ")
  const[password,setPassword] = useState(" ")
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
              placeholder="Email"/>
              <Input
              id="name" 
              placeholder="Password"/>
            </div>
            <div className="flex flex-col space-y-1.5">
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login
