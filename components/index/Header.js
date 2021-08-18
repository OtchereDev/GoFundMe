import React from 'react'
import Image from "next/image"
import HeaderDesktop from '../assets/gofundme-homepage-desktop.png'
import HeaderMobile from "../assets/gofundme_homepage-mobile.png"

const Header = () => {
    return (
        <div className="w-full header relative">

            <div className="w-full img_cont ">
                <div className='lg:hidden block relative h-full w-full'>
                    <Image src={HeaderMobile} layout={"fill"} />
                </div>
                <div className='hidden lg:block relative h-full w-full'>
                    <Image src={HeaderDesktop} layout={"fill"} />
                </div>
            </div>
            <div className="px-4 pt-5 lg:absolute text_comp top-1/4 lg:w-6/12">

                <h1 className="text-4xl lg:text-5xl text-primary_black font-bold ">
                    Fundraising for the people and causes you care about
                </h1>

                <h3 className="my-4 text-xl text-gray-400">
                    Get Started Today.
                </h3>

                <button className="py-3 shadow-md bg-primary_green text-gray-50 text-lg w-full rounded-md font-bold lg:w-4/12 outline-none">
                    Start a GoFundMe
                </button>

            </div>
        </div>
    )
}

export default Header
