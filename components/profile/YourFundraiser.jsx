import React from 'react'
import SearchCard from '../search/SearchCard'
import CardComp from '../CardComp'

const YourFundraiser = () => {

  const fundraisers=[
    {
      title:"Hello World",
      id:1,
      organiser:{fullName:"Oliver Otchere"},
      // last_donation_time,
      goal_amount:1000,
      country:"Ghana",
      description:"dhdj dhdjdhs dhdsh",
      amountRaised:50
    },
    {
      title:"Hello World",
      id:1,
      organiser:{fullName:"Oliver Otchere"},
      goal_amount:1000,
      country:"Ghana",
      description:"dhdj dhdjdhs dhdsh",
      amountRaised:50
    },
    {
      title:"Hello World",
      id:1,
      organiser:{fullName:"Oliver Otchere"},
      goal_amount:1000,
      country:"Ghana",
      description:"dhdj dhdjdhs dhdsh",
      amountRaised:50
    }
  ]
  return (
    <div>
      <p className='text-center md:text-lg font-semibold '>
        Your Fundraisers
      </p>

      <div className='flex flex-wrap'>
        {fundraisers.map((fundraiser,index)=> (<CardComp fundraiser={fundraiser} showLoc={false} showTotal={false} key={index} />)
        )}
      </div>
    </div>
  )
}

export default YourFundraiser
