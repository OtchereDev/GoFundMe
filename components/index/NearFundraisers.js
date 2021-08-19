
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CardComp from '../CardComp'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons"


const NearFundraisers = () => {
    return (
        <div className="px-4  pt-14 lg:pt-20 lg:px-16 w-full">

            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                Find a GoFundMe near you
            </h2>
            
            <div className="flex flex-wrap">

                <CardComp showLoc={false} />
                <CardComp showLoc={false} />
                <CardComp showLoc={false} />
                <CardComp showLoc={false} />
                <CardComp showLoc={false} />


            </div>
     
        </div>
    )
}

export default NearFundraisers
