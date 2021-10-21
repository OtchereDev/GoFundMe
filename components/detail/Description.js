import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment'
import ContactCard from './ContactCard'
import CommentCard from './CommentCard'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Description = ({title,createdAt,organiser,category,description,donations,NumberOfDonations,setModalChildren,setIsModalOpen}) => {

    const comments=donations.filter(donation=>donation.comment)

    const onContactClick=()=>{
        setModalChildren(<ContactCard contact={organiser}/>)
        setIsModalOpen(true)
    }

    const onCommentClick=()=>{
        setModalChildren(<CommentCard />)
        setIsModalOpen(true)
    }

    return (
        <div className="w-full md:w-8/12 md:mx-auto  px-4 lg:px-10 border-b">
            <h1 className="text-3xl lg:text-5xl capitalize my-2 text-center font-semibold">

                {title}
            </h1>

            <div>   
            <div className={`flex my-2 border-b p-1  items-center`}>
                <div className="flex justify-center items-center text-green-700  h-10 w-10 rounded-full mr-4 bg-green-100">
                    <FontAwesomeIcon icon={ faUser } />
                </div>
                <div >

                    <h3 className="">
                        {organiser.fullName} is organizing this fundraiser.
                    </h3>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center py-3">
                <span className="md:mr-2">
                    Created {formatDistanceToNow( Date.parse(createdAt) , { addSuffix: true })}
                </span>
                <span className="flex items-center">
                    |  <FontAwesomeIcon className="text-lg m-2 text-green-400" icon={faTag} />
                    <span className="cursor-pointer hover:bg-gray-100 p-1 ">
                        {category.join(", ")}
                    </span>
                </span>
            </div>
            <p className="text-gray-800 tracking-wide ">
               {description}
            </p>
            </div>

            <div className="mt-3">
                <h3 className="border-b pb-2 text-xl font-bold">
                    Organizer
                </h3>

                <div className="flex my-2  p-1  items-center">
                    <div className="flex justify-center items-center text-green-700  h-10 w-10 rounded-full mr-4 bg-green-100">
                        <FontAwesomeIcon icon={ faUser } />
                    </div>
                    <div className="lg:flex w-full">
                        <div className="lg:w-10/12">
                            <h3 className="">
                                {organiser.fullName} 
                            </h3>
                            <h5 className="text-sm my-1">
                                Organiser
                            </h5>

                        </div>
                        <div className="w-2/12">

                            <button onClick={onContactClick} className="text-green-700 font-semibold border border-green-500 bg-white hover:bg-green-50 rounded-md py-1 px-3 outline-none">
                                Contact
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h3 className=" pb-2 text-2xl font-bold">
                    Comments ({comments.length})
                </h3>

                {comments.length? 
                comments.map((comment,index)=> <Comment key={index} comment={comment} /> )
                : <h3 className="text-center my-5">
                    No comments 
                </h3>}
               

                {NumberOfDonations > 5 ? <div className="my-3">
                    <button onClick={onCommentClick} className="w-full lg:w-4/12 py-2 text-green-700 font-semibold border border-green-500 bg-white hover:bg-green-50 rounded-md outline-none ">
                        Show More
                    </button>
                </div> : ""}

            </div>
            
        </div>
    )
}

export default Description
