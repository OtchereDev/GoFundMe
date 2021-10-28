import React from 'react'
import CountrySelector from './CountrySelect'
import CategorySelect from './CategorySelect'
import RaiseForSelect from './RaiseForSelect'

const Form1 = () => { 
  
  return (
    <div>
      <div>
        <h3 className='text-center text-gray-800 my-4 text-lg font-semibold'>
          Enter Your Goal Here
        </h3>
        <div className="flex items-center border p-3 rounded-md my-3">
          <h3 className="text-2xl">USD</h3>

          <div className="flex items-center">
            <input
              type="number"
              min="0"
              // value={donation}
              // onChange={(e) => setDonation(e.target.value)}
              // onFocus={(e) => setShowPayment(false)}
              className="block w-full text-4xl md:text-5xl font-semibold text-right outline-none appearance-none"
            />
            <h3 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-0">
              .00
            </h3>
          </div>
        </div>
      </div>

  
      <div className="flex items-center border p-2 rounded-md my-2 w-full">

        <div className="flex items-center w-full">
          <input
            // value={donation}
            // onChange={(e) => setDonation(e.target.value)}
            // onFocus={(e) => setShowPayment(false)}
            placeholder='Campaigne title'
            className="block w-full text-lg  outline-none appearance-none placeholder-gray-300"
          />
        </div>
      
          <h3 className=" text-lg font-semibold text-gray-800 mb-0 px-2">
           50
          </h3>
      </div>
      {/* <div>
        <select className='w-full p-3 rounded-md bg-gray-50 border border-gray-200 outline-none'>
          <option value="">
            Who are you raising the funds for ?
          </option>
          <option value="myself">Myself</option>
          <option value="someone">Someone else</option>
        </select>
      </div> */}

      <RaiseForSelect/>

      <div>
        <input className='w-full p-2 block outline-none border rounded-md' placeholder='Enter name of Beneficatory'  />
      </div>

      <CountrySelector/>

      <CategorySelect/>

      <div>
        <p className='text-sm text-gray-400'>
          The platform is free for organizers. Transaction fee is 2.9 plus $0.30 per donation. By continuing, you agree to the GoFundMe terms and acknowledge receipt of our privacy policy
        </p>
      </div>

      <div className='my-2'>
        <button className='w-full text-lg font-semibold bg-primary_green py-3 text-gray-50 rounded-md '>
          Next
        </button>
      </div>

 
      
  </div>
  )
}

export default Form1
