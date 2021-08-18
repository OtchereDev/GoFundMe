import React, { useEffect, useRef } from 'react'
import SearchBar from './SearchBar'

const SearchComp = ({setShowSearch,showSearch}) => {

    const wrapperRef = useRef(null)

    useEffect(()=>{

        if (showSearch){
    
            wrapperRef.current?.classList?.remove("hidden") 
        }else{
    
            wrapperRef.current?.classList?.add("hidden")
        }

    },[showSearch])



    const wrapperClose=(e)=>{
        if (e.target.classList.contains("wrapper")){
          
            setShowSearch(false)
            
        }
    }
    return (
        <div ref={wrapperRef} onClick={wrapperClose} className="w-full absolute z-20 top-0 left-0 h-full bg-opacity-20 wrapper bg-black">
            <SearchBar handleClose={setShowSearch} />
        </div>
    )
}

export default SearchComp
