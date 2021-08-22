import React from 'react'
import LogoSvg from "../LogoSvg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from 'next/router'

const NavBar = () => {

    const router=useRouter()

    const {uuid}= router.query

    const moveToFundraiser=()=>{
        router.push(`/f/${uuid}`)
    }

    return (
        <nav className="flex items-center justify-between w-full py-5 px-4 lg:px-20 absolute top-0 left-0 bg-white shadow-sm z-10">
            <div className="w-3/12 lg:hidden flex justify-center items-center">
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={moveToFundraiser} className="text-lg lg:text-xl text-gray-600 cursor-pointer"  />
                    
                </div>
            </div>
            <div className="w-6/12 flex items-center">
                               
                <LogoSvg  width={" w-8/12 lg:w-3/12"} />
                
            </div>
            <div className="w-3/12 flex justify-center items-center">

                
                <div className=" lg:flex items-center justify-center">
                    
                        <div>
                            <Link href={"/sign-in"}>
                                <p className="mr-2 text-sm underline hover:text-gray-500 cursor-pointer">

                                    <span className="hidden lg:inline-block mr-2">
                                        Already have an account
                                    </span>
                                
                                    Sign in
                                  
                                </p>
                            </Link>
                        </div>
                        
                   
                </div>

            </div>
        </nav>
    )
}

export default NavBar
