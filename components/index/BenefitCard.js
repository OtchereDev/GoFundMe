import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BenefitCard = ({icon,title,description}) => {
    return (
        <div className="flex  lg:items-start mb-2 md:m-4 md:w-5/12  lg:w-3/12 items-center md:items-start">
            <div className="mr-4 md:mr-2 pt-1">
                <FontAwesomeIcon className="text-4xl md:text-4xl text-primary_green" icon={ icon } />
            </div>
            <div>
                <h4 className="text-lg md:text-xl font-medium ">
                   {title}
                </h4>
                <h6 className="hidden md:block text-gray-500 ">
                    {description}
                </h6>
            </div>
        </div>
    )
}

export default BenefitCard
