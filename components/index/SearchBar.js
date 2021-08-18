import React from 'react'
import { faTimes,faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SearchBar = ({handleClose}) => {
    return (
        <div className="w-full py-3 px-7 lg:py-5 lg:px-10 bg-white">
            <div>
                <div className="text-right text-xl">
                    <FontAwesomeIcon icon={faTimes} onClick={()=>handleClose(false)} className="cursor-pointer" />
                </div>
                <div>
                    <div className="flex items-center ml-4 my-3">
                        <span>
                            <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
                        </span>
                        <span className="font-semibold ml-2 ">
                            Search GoFundMe
                        </span>
                    </div>
                    <div className="w-full">
                        <input className="py-2 px-4 w-full" type="text" placeholder="Find a dundraiser by name or location" />

                    </div>
                </div>
            </div>
  
        </div>
    )
}

export default SearchBar
