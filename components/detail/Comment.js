import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Comment = () => {
    return (
        <div className={` my-2 border-t py-2 text-green-700 items-center`}>
            <div className="flex items-center">
                <div className="flex justify-center  items-center h-10 w-10 rounded-full mr-4 bg-green-100">
                    <FontAwesomeIcon icon={ faUser } />
                    
                </div>
                <h3 className="text-lg ">
                    Kelly Hayne donated £10
                </h3>
            </div>
            <div >

                <p className="text-gray-800">
                    On behalf of summers scents
                </p>
                <p className="text-sm">
                    7 mins
                </p>
            </div>
        </div>
    )
}

export default Comment
