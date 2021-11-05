import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import EditForm from './EditForm'

const EditComponent = () => {
  const [step,setStep] = useState(1)
  return (
    <div>
      
      <div className='py-5 px-3 md:px-10 lg:px-40 w-full bg-gray-50'>
        <button className='py-2 px-4 border rounded-md flex items-center'>
          <FontAwesomeIcon icon={faChevronLeft} className='mr-3' />
          <p>
            Manage
          </p>
        </button>
      </div>

      <EditForm step={step} setStep={setStep} />
    </div>
  )
}

export default EditComponent
