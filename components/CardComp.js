import React from 'react'
import HeaderImage from "./assets/gofundme_homepage-mobile.png"
import Image from 'next/image'


const CardComp = () => {
    return (
        <div className="w-6/12 md:w-4/12 lg:w-3/12 shadow-lg">
                <div className="w-full relative h-28 md:h-40 rounded-t-md overflow-hidden ">
                    <Image src={HeaderImage} layout={"fill"} />
                </div>
                <div className="p-2 bg-white">
                    <h3 className="text-primary_green font-bold ">
                        CASTLE HILL NSW
                    </h3>
                    <h2 className="md:text-lg font-bold">
                        Lebanon Relief Now
                    </h2>
                    <h4 className="hidden md:block">
                        My name is Jessica Kahawaty and I, like many Lebanese expats fee ...
                    </h4>
                    <h4 className="text-sm text-gray-400">
                        Last donation 17m ago
                    </h4>
                    <div className="w-full my-2">
                        <div className="w-full h-1 relative rounded-3xl bg-gray-200">
                            <div className="w-3/12 h-full absolute rounded-3xl top-0 left-0 bg-primary_green">

                            </div>
                        </div>
                    </div>
                    <h2 className="lg:text-lg md:font-bold ">
                        $152,040 raised <span className="hidden font-normal md:inline-block">of $300,000</span> 

                    </h2>
                </div>
            </div>
    )
}

export default CardComp
