import React from 'react'
import CategorySelect from "../../create/CategorySelect"
import CountrySelect from "../../create/CountrySelect"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'

const InfoComponent = () => {
  return (
    <div >

      <div className='px-3 md:px-10 lg:px-40 pt-5 bg-gray-100'>
      <div className='flex justify-between items-center flex-col md:flex-row'>
        
        <div className='px-3 w-full md:w-6/12'>
          <p className='py-1 font-semibold text-gray-500'>
            Title:
          </p>
          <div className="flex items-center border p-2 bg-gray-50  rounded-md my-2 w-full">
            <div className="flex items-center w-full">
              <input
                // value={title}
                // onChange={handleTitle}

                placeholder='Campaigne title'
                className="block w-full   outline-none appearance-none placeholder-gray-300"
              />
            </div>

              <h3 className=" text-lg font-semibold text-gray-800 mb-0 px-2">
              {/* {maxTitle - title.length} */}
              28
              </h3>
          </div>
        </div>
        <div className='px-3 w-full md:w-6/12 '>
          <p className='py-1 font-semibold text-gray-500'>
            Amount:
          </p>
          <div className="flex items-center border p-2 bg-gray-50  rounded-md my-2">
            <h3 className=" mr-5 font-semibold ">$</h3>

            <div className="flex items-center w-full">
              {/* <h3 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-0">
                $
              </h3> */}
              <input
                // type="number"
                // min="1"
                // value={amount}
                // onChange={handleAmount}
                className="block w-ful font-semibold outline-none appearance-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center flex-col md:flex-row'>
        <div className='px-3 w-full md:w-6/12'>
            <p className='py-1 font-semibold text-gray-500'>
              Category:
            </p>
            <CategorySelect/>
        </div>
        <div className='px-3 w-full md:w-6/12'>
            <p className='py-1 font-semibold text-gray-500'>
              Location:
            </p>
            <CountrySelect/>
        </div>
      </div>

      </div>

      <div className='px-3 md:px-10 lg:px-40 pt-5 bg-gray-100'>
      <p className='text-gray-700 font-semibold text-lg border-b mb-3'>
        Campaigne link
      </p>
      <p className='text-gray-500 font-medium text-lg'>
        gofundme.com/f/otcheredev-is-a-great-youtuber
      </p>
      <p className='text-gray-400 font-medium text-sm'>
        This is the link you would share with others
      </p>


      <div className="flex items-center border p-2 bg-gray-50  rounded-md my-2 w-full md:w-5/12">
        <div className="flex items-center w-full ">
          <input
            value={"gofundme.com/f/otcheredev-is-a-great-youtuber"}
            // onChange={handleTitle}
              disabled
            placeholder='Campaigne link'
            className="block w-full   outline-none appearance-none placeholder-gray-300"
          />
        </div>

          <h3 className=" text-lg font-semibold text-gray-800 mb-0 px-2">
              <FontAwesomeIcon icon={faCopy} className='cursor-pointer' />
          </h3>
      </div>





      </div>
    </div>
  )
}

export default InfoComponent
