import React from 'react'
import Image from "next/image"
import HeaderImage from '../../assets/gofundme_homepage-mobile.png'

const ManageHeader = () => {
  return (
    <div className='bg-gray-100 '>
      <div className='w-full p-9 bg-gray-900'>

      </div>
      <div className='px-3 md:px-10 lg:px-40'>

        <div className=' w-32 h-24  shadow-xl  transform -translate-y-1/2 overflow-hidden rounded-md relative'>
          <Image src={HeaderImage} layout={"fill"} />
        </div>
      </div>
    </div>
  )
}

export default ManageHeader
