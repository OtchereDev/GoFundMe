import React from 'react'
import Header from './Header'
import InfoComponent from './InfoComponent'
import PhotoComponent from './PhotoComponent'
import StoryComponent from './StoryComponent'


const EditForm = ({step, setStep}) => {
  return (
    <div className=''>
      <Header step={step} setStep={setStep} />

      {step ==1 && <InfoComponent step={step} setStep={setStep} /> }  
   
     { step ==2 && <PhotoComponent/> }

     {step ==3 && <StoryComponent/> }
    

      <div className='px-3 md:px-10 lg:px-40 pt-5 bg-gray-100'>
        <div className='py-3'>
          <button className='py-2 px-5 mx-auto block bg-primary_green font-medium text-gray-50 rounded-md'>
            Update
          </button>
        </div>

      </div>

    </div>
  )
}

export default EditForm
