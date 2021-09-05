
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CardComp from '../CardComp'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons"


const TopFundraisers = ({fundraisers}) => {
    return (
        <div className="px-4  pt-14 lg:pt-20 lg:px-16 w-full">

            <h2 className="text-3xl md:mt-8 lg:mt-0 lg:text-4xl font-bold mb-5">
                Top Fundraiser
            </h2>
            
            <div className="flex flex-wrap">

                {
                    fundraisers.map((fundraiser,index)=> <CardComp key={index} fundraiser={fundraiser} />)
                }


            </div>
            <div className="flex justify-end lg:my-4 ">
                <button className="w-full border lg:hidden py-2 rounded-md my-3 border-primary_green outline-none text-primary_green text-lg ">
                    See more
                </button>

                <button className="hidden lg:flex outline-none items-center text-gray-400 text-lg p-2">
                    <span>
                        See more
                    </span>
                    <span className="flex items-center">
                        <FontAwesomeIcon className="text-base ml-3" icon={faChevronRight}  />
                    </span>
                </button>
            </div>


            
        </div>
    )
}

export default TopFundraisers
