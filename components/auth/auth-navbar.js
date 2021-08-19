import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import LogoSvg from '../LogoSvg'

const AuthNavBar = () => {

    const router = useRouter()
   
    return (

        <div className="flex justify-between w-full bg-white shadow-md items-center py-4 px-4  lg:px-32 absolute top-0 left-0">
           
                
            <LogoSvg  width={"w-4/12 md:w-2/12"}/>
            
            <div className="flex justify-center text-sm ">
                <p className={`${router.pathname=="/sign-in"?"block":"hidden"}`}>
                    <span className="hidden md:inline-block">
                        Do not have an account? 
                    </span>
                    <span className="pl-2">
                        <Link className="text-primary_green" href="/sign-up">
                            <a className="text-primary_green underline">
                                Sign Up
                            </a>
                        </Link>
                    </span>
                </p>

                <p className={`${router.pathname=="/sign-up"?"block":"hidden"}`}>
                    <span className="hidden md:inline-block">
                       Have an account?
                    </span>
                    <span className="pl-2 inline-block" >
                        <Link className="text-primary_green" href="/sign-in">
                            <a className="text-primary_green underline">
                                Login
                            </a>
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AuthNavBar
