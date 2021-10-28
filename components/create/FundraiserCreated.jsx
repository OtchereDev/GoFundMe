import React from 'react'
import {Timeline} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const FundraiserCreated = () => {
  return (
    <div className='w-11/12 mx-auto md:w-5/12 rounded-md bg-gray-50 py-4 px-4 md:px-16 shadow-2xl my-5 md:my-8'>
      <h2 className='my-4 text-2xl font-semibold text-gray-900 text-center'>
        Your Fundraiser is ready.
      </h2>
      <h3 className='my-2 text-xl md:text-2xl font-semibold text-gray-900 text-center'>
        Let's start getting donations
      </h3>

      <div className='w-10/12 md:w-9/12 mx-auto my-5 '>
        <Timeline className=''>
          <Timeline.Item color='green'>Setup your GoFundMe</Timeline.Item>
          <Timeline.Item color='gray'>Share with 3-5 friends and ask them to help you</Timeline.Item>
          <Timeline.Item color='gray'>Post to atleast 1 social network</Timeline.Item>
          <Timeline.Item color='gray'>Send reminders to your friends</Timeline.Item>
        </Timeline>
      </div>

      <div className='w-10/12 mx-auto p-3 bg-pink-50 flex items-center rounded-md'>
        <FontAwesomeIcon icon={faDollarSign} className=' text-gray-400 text-lg mr-2' />
        <p className='text-md'>
          We will remind you to set up withdrawals once you get your first donation
        </p>
      </div>

      <div className='my-4 w-10/12 mx-auto'>
        <button className='w-full text-lg font-semibold bg-primary_green py-3 text-gray-50 rounded-md '>
          Next
        </button>
      </div>
    </div>
  )
}

export default FundraiserCreated
