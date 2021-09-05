import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DonateItem = ({border_class,donate}) => {
    return (
        <div className={`flex my-2 ${border_class} text-green-700 items-center`}>
            <div className="flex justify-center items-center h-10 w-10 rounded-full mr-4 bg-green-100">
                <FontAwesomeIcon icon={ faUser } />
            </div>
            <div >

                <h3 className="text-lg">
                    {donate.name}
                </h3>
                <div className="flex items-center">

                    <span className="text-lg mr-2">
                        ${donate.amount}
                    </span>
                    
                    <span className="text-sm">
                        {formatDistanceToNow( Date.parse(donate.createdAt) , { addSuffix: false })}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DonateItem
