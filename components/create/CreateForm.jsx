import React,{useState} from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import FundraiserCreated from './FundraiserCreated'

const CreateForm = () => {
  const [step,setStep]=useState(1)
  const [success,setSuccess] = useState(false)
  return (
    <>
    {
      !success ?
      <>
      
      <div className='w-11/12 mx-auto md:w-5/12 rounded-md bg-gray-50 py-4 px-4 shadow-2xl my-5 md:my-8'>
        <p className='text-center text-gray-900 mb-3'>
          Step {step} of 3
        </p>
        <div className='flex justify-between mb-2'>
          <div className='w-4/12 h-1 rounded-full bg-primary_green mr-1'>

          </div>
          <div className='w-4/12 h-1 rounded-full bg-gray-200 mr-1'>

          </div>
          <div className='w-4/12 h-1 rounded-full bg-gray-200 '>

          </div>
        </div>
        {/* <Form1/> */}
        <Form2/>
        {/* <Form3/> */}
      </div>
      {
        step > 1 
        && 
        <div>
          <a className='text-center text-md cursor-pointer underline block'>Go Back </a>
        </div>
      }
      </>
      :
      <FundraiserCreated/>

}
    </>
  )
}

export default CreateForm
