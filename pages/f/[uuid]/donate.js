import React from 'react'
import Head from "next/head"
import NavBar from "../../../components/donate/NavBar"
import Image from "next/image"
import TestImage from "../../../components/assets/gofundme_homepage-mobile.png"

const Donate = () => {
    return (
        <>

        <Head>
            <title>
                Donate to Tragic accident of a young girl
            </title>
        </Head>

        <div className="w-full min-h-screen bg-gray-100">
            <NavBar/>

            <div className="w-full lg:w-10/12 lg:mx-auto lg:pt-32 flex flex-col lg:flex-row lg:justify-between ">
                <div className="w-full lg:w-7/12 lg:rounded-md  lg:px-5 lg:py-2 bg-white">
                    <div className="flex flex-col lg:flex-row lg:items-center " >
                        <div className="w-full lg:w-4/12 h-52 md:h-72 lg:h-32 relative lg:rounded-md overflow-hidden">
                            <Image src={TestImage} objectFit={"cover"} layout={"fill"} />

                        </div>
                        <div className="">

                            <h3 className="p-3">
                                You're supporting 
                                <span className="text-lg font-semibold">
                                    Tragic accident of a young girl
                                </span> 
                            </h3>
                            <h4 className="text-sm p-3">

                                Your donation will benefit Chelsea Clarke
                            </h4>

                        </div>
                    </div>


                </div>
                <div className="w-full lg:w-3/12 ">

                </div>
            </div>

        </div>
            
        </>
    )
}

export default Donate
