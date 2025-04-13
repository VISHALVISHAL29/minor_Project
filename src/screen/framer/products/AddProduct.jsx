import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


function AddProduct() {
    return (
        <div className='bg-stone-200'>
             <form>
                    <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" placeholder="" />
                            </div>
                        </div>
                    </form>
        </div>
    )
}

export default AddProduct