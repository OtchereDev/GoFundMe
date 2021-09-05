import React from 'react'
import HeaderImage from "./assets/gofundme_homepage-mobile.png"
import Image from 'next/image'
import Link from 'next/link'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const CardComp = ({ fundraiser,showLoc=true}) => {

    const {
        title,
        description,
        image_url,
        last_donation_time,
        goal_amount,
        country,
        id,
        amountRaised
    } = fundraiser
    return (
        <Link href={`/f/${id}`} >
        
            <div className="card m-2 shadow-md lg:shadow-lg rounded-b-md overflow-hidden">
                    <div className="w-full relative h-28 md:h-40 rounded-t-md overflow-hidden ">
                        <Image src={HeaderImage} layout={"fill"} />
                    </div>
                    <div className="p-2 bg-white ">
                        {showLoc && <h3 className="text-primary_green text-xs font-bold uppercase">
                                {country}
                            </h3>}
                        <h2 className="md:text-lg font-bold capitalize">
                            {title}
                        </h2>
                        <h4 className="hidden md:block">
                            {description.length==200 ? description[200]+" ..." : description}
                        </h4>
                        {last_donation_time && <h4 className="text-sm text-gray-400">
                            Last donation {formatDistanceToNow( Date.parse(last_donation_time) , { addSuffix: true })}
                        </h4>}
                        <div className="w-full my-2">
                            <div className="w-full h-1 relative rounded-3xl bg-gray-200 overflow-hidden">
                                <div style={{width : `${(amountRaised/goal_amount)*100}%`}} className="w-3/12 h-full absolute rounded-3xl top-0 left-0 bg-primary_green">

                                </div>
                            </div>
                        </div>
                        <h2 className="text-sm md:text-base lg:text-lg md:font-bold ">
                            ${amountRaised} raised <span className="hidden font-normal md:inline-block">of ${goal_amount}</span> 

                        </h2>
                    </div>
                </div>
        </Link>
    )
}

export default CardComp
