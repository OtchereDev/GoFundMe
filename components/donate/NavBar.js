import React,{useContext} from 'react'
import LogoSvg from "../LogoSvg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import {AuthContext} from '../../context/AuthContext'

const NavBar = () => {

    const user = useSelector(state => state.user?.email)

    const {logout} = useContext(AuthContext)

    const router=useRouter()

    const {uuid}= router.query

    const moveToFundraiser=()=>{
        router.push(`/f/${uuid}`)
    }

    const handlePushToProfile=()=>{
        router.push("/profile")
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
            <div className="hidden lg:flex items-center justify-center">
                    
                        
                    {
                        user ?
                        <>  
                            <div>
                                
                                <span onClick={handlePushToProfile} className="mr-4 text-sm hover:text-gray-500 cursor-pointer">
                                    Welcome {user}
                                </span> 
                            </div>

                            <div>
                                <button onClick={logout} className="px-2 outline-none py-1 font-semibold rounded-md bg-red-600 text-gray-50 shadow-md">
                                    Logout
                                </button>
                            </div>
                        </> 
                        :
                        <>
                            <Link href={"/sign-in"}>
                        
                                <span className="mr-2 text-sm hover:text-gray-500 cursor-pointer">
                                    Sign in
                                </span>
                            </Link>
                            <div>
                                <button className="px-2 outline-none py-1 font-semibold rounded-md bg-primary_green text-gray-50 shadow-md">
                                    Start a GoFundMe
                                </button>
                            </div>
                        </>
                    }
                       
                   
                </div>

            
            </nav>
           
    )
}

export default NavBar
