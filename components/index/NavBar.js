import React from 'react'
import LogoSvg from "../LogoSvg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const NavBar = ({setShowSearch,setToggler}) => {
    return (
        <nav className="flex items-center justify-center w-full py-5 px-4 lg:px-6 absolute top-0 left-0 bg-white shadow-sm z-10">
            <div className="w-3/12">
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon onClick={()=>setShowSearch(true)} icon={faSearch} className="text-lg lg:text-xl text-gray-600 cursor-pointer"  />
                    <span onClick={()=>setShowSearch(true)} className="hidden ml-2 text-sm hover:text-gray-400 cursor-pointer lg:block">
                        Search 
                    </span>
                </div>
            </div>
            <div className="w-6/12 flex justify-center items-enter">
                               
                <LogoSvg  width={" w-8/12 lg:w-3/12"} />
                
            </div>
            <div className="w-3/12 flex justify-center items-center">

                <div className="lg:hidden">
                    <div>
                        <FontAwesomeIcon onClick={()=>setToggler(true)} icon={faBars} className="text-gray-700 cursor-pointer" />
                        
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                    
                        <div>
                            <Link href={"/sign-in"}>
                            
                                <span className="mr-2 text-sm hover:text-gray-500 cursor-pointer">
                                    Sign in
                                </span>
                            </Link>
                        </div>
                        <div>
                            <button className="px-2 outline-none py-1 font-semibold rounded-md bg-primary_green text-gray-50 shadow-md">
                                Start a GoFundMe
                            </button>
                        </div>
                   
                </div>

            </div>
        </nav>
    )
}

export default NavBar
