import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DonateItem = ({border_class}) => {
    return (
        <div className={`flex my-2 ${border_class} text-green-700 items-center`}>
            <div className="flex justify-center items-center h-10 w-10 rounded-full mr-4 bg-green-100">
                <FontAwesomeIcon icon={ faUser } />
            </div>
            <div >

                <h3 className="text-lg">
                    Eric Smith
                </h3>
                <div className="flex items-center">

                    <span className="text-lg mr-2">
                        $20
                    </span>
                    
                    <span className="text-sm">
                        2 hours
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DonateItem
