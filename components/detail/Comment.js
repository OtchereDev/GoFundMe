import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Comment = ({comment,removeBorderTop}) => {
    return (
        <div className={` my-2 ${ !removeBorderTop && "border-t"} py-2 text-green-700 items-center`}>
            <div className="flex items-center">
                <div className="flex justify-center  items-center h-10 w-10 rounded-full mr-4 bg-green-100">
                    <FontAwesomeIcon icon={ faUser } />
                    
                </div>
                <h3 className="text-lg ">
                    {comment.name} donated £{comment.amount}
                </h3>
            </div>
            <div >

                <p className="text-gray-800">
                    {comment.comment}
                </p>
                <p className="text-sm">
                   {formatDistanceToNow( Date.parse(comment.createdAt) , { addSuffix: true })}
                </p>
            </div>
        </div>
    )
}

export default Comment
