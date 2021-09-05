
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CardComp from '../CardComp'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons"


const NearFundraisers = ({fundraisers}) => {
    return (
        <div className="px-4  pt-14 lg:pt-20 lg:px-16 w-full">

            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                Find a GoFundMe near you
            </h2>
            
            <div className="flex flex-wrap">

                {
                    fundraisers.map((fundraiser,index)=> <CardComp key={index} showLoc={false} fundraiser={fundraiser} />)
                }

                


            </div>
     
        </div>
    )
}

export default NearFundraisers
