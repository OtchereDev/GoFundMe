import React from 'react'

const ProfileHeader = () => {
  return (
    <div className='flex'>
      {/* <div className='w-20 h-20 rounded-full border'>

      </div> */}
      <div className=''>
        <div className="w-20 h-20 md:w-28 md:h-28  mx-auto border rounded-3xl border-primary_green shadow">
          <img src="https://img.icons8.com/plasticine/200/000000/user-male.png" />
        </div>
        <div className='my-2'>
          <button className='py-1 px-2  border rounded-md'>
            Change Profile Pic
          </button>
        </div>
      </div>
      <div className='md:w-7/12'>
        <h3 className='text-2xl font-medium md:ml-4 pt-5'>
          Oliver Otchere
        </h3>
      </div>
    </div>
  )
}

export default ProfileHeader
