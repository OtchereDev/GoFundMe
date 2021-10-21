import React from 'react'
import HeaderImage from "../assets/gofundme_homepage-mobile.png"
import Image from 'next/image'
import Link from 'next/link'



const SearchCard = ({ fundraiser,showLoc=true}) => {

    const {
        title,
  
        organiser,
        id,
    
    } = fundraiser


    return (
        <Link href={`/f/${id}`} >
        
            <div className="card m-2 shadow-md lg:shadow-lg rounded-b-md overflow-hidden">
                    <div className="w-full relative h-28 md:h-40 rounded-t-md overflow-hidden ">
                        <Image src={HeaderImage} layout={"fill"} />
                    </div>
                    <div className="p-2 bg-white ">
                 
                        <h2 className="md:text-lg font-bold capitalize">
                            {title}
                        </h2>
                      
                        
                       
                        <h2 className="text-sm md:text-base lg:text-lg md:font-bold ">
                          by {organiser.fullName}
                        </h2>
                    </div>
                </div>
        </Link>
    )
}

export default SearchCard
