import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment'

const Description = () => {
    return (
        <div className="w-full md:w-8/12 md:mx-auto  px-4 lg:px-10 border-b">
            <h1 className="text-3xl lg:text-5xl my-2 text-center font-semibold">

                Tragic accident of a young girl
            </h1>

            <div>   
            <div className={`flex my-2 border-b p-1  items-center`}>
                <div className="flex justify-center items-center text-green-700  h-10 w-10 rounded-full mr-4 bg-green-100">
                    <FontAwesomeIcon icon={ faUser } />
                </div>
                <div >

                    <h3 className="">
                        Chelsea Clarke is organizing this fundraiser.
                    </h3>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center py-3">
                <span className="md:mr-2">
                    Created 3 days ago
                </span>
                <span className="flex items-center">
                    |  <FontAwesomeIcon className="text-lg m-2 text-green-400" icon={faTag} />
                    <span className="cursor-pointer hover:bg-gray-100 p-1 ">
                        Accidents & Emergencies
                    </span>
                </span>
            </div>
            <p className="text-gray-800 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora maxime inventore ratione nostrum consequatur ullam. Quisquam laboriosam ullam, qui architecto rerum iste aperiam. Omnis optio odit animi laudantium consequuntur!
                Rerum odio optio vero omnis facere ad quibusdam est, architecto pariatur voluptatum ex itaque doloremque provident saepe iure? Quibusdam sed temporibus illo itaque non soluta molestiae doloremque fuga officiis possimus.
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
                                Chelsea Clarke 
                            </h3>
                            <h5 className="text-sm my-1">
                                Organiser
                            </h5>

                        </div>
                        <div className="w-2/12">

                            <button className="text-green-700 font-semibold border border-green-500 bg-white hover:bg-green-50 rounded-md py-1 px-3 outline-none">
                                Contact
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h3 className=" pb-2 text-2xl font-bold">
                    Comments (164)
                </h3>

                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>

                <div className="my-3">
                    <button className="w-full lg:w-4/12 py-2 text-green-700 font-semibold border border-green-500 bg-white hover:bg-green-50 rounded-md outline-none ">
                        Show More
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default Description
