import router from 'next/router'
import React from 'react'
import SearchCard from './SearchCard'

const SearchResult = ({fundraisers,type}) => {
  const {term} = router.query
  return (
    <div className="px-4  pt-14 lg:pt-20 lg:px-16 w-full lg:w-9/12 lg:mx-auto" >

      {
        type=="search"
        &&
        <h2 className="text-lg lg:text-xl font-bold mb-5">
        Fundraisers for "{term}" in all locations
        </h2>
      }
      <div className='flex flex-wrap'>
        { 
          fundraisers?.length ?
          fundraisers.map((fundraiser,index)=>
          <SearchCard key={index} fundraiser={fundraiser} />)
          :
          <h1 className='text-center text-xl my-4'>
            No fundraisers found matching the search term
          </h1>
        }

      </div>
      
    </div>
  )
}

export default SearchResult
