import React from 'react'

const Header = ({step, setStep}) => {
  return (
  
        <div className='bg-gray-50 border-b px-3 md:px-10 lg:px-40 '>

        <div>
          <h4 className='text-gray-900 text-2xl  font-semibold'>
            Edit Campaigne
          </h4>
          <p className='text-gray-400 mb-4'>
            Fundraiser Titlte
          </p>
        </div>

        <div className='w-full md:w-6/12 lg:w-4/12 px border-t flex'>
          <div onClick={()=>setStep(1)} className={`w-4/12 py-2 flex justify-center items-center cursor-pointer ${step ==1 && "border-b-4 border-black "}`}>
            <p>
              Overview
            </p>
          </div>
          <div onClick={()=>setStep(2)} className={`w-4/12 py-2 flex justify-center items-center cursor-pointer ${step ==2 && "border-b-4 border-black "}`}>
            <p>
              Photo
            </p>
          </div>
          <div onClick={()=>setStep(3)} className={`w-4/12 py-2 flex justify-center items-center cursor-pointer ${step ==3 && "border-b-4 border-black "}`}>
            <p>
              Story
            </p>
          </div>
        </div>
        </div>
    
  )
}

export default Header
