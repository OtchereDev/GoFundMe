import React,{useState} from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import FundraiserCreated from './FundraiserCreated'

const CreateForm = () => {
  const [step,setStep]=useState(1)
  const [success,setSuccess] = useState(false)
  const [form1Data, setForm1Data] = useState()
  const [form2Data, setForm2Data] = useState()
  const [form3Data, setForm3Data] = useState()

  const increaseStep=()=>{
    setStep(step + 1)
  }
  const decreaseStep=()=>{
    setStep(step - 1)
  }

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
          <div className={`w-4/12 h-1 rounded-full ${step>=1 ?"bg-primary_green" : "bg-gray-200"} mr-1`}>

          </div>
          <div className={`w-4/12 h-1 rounded-full ${step>=2 ?"bg-primary_green" : "bg-gray-200"} mr-1`}>

          </div>
          <div className={`w-4/12 h-1 rounded-full ${step>=3 ?"bg-primary_green" : "bg-gray-200"} `}>

          </div>
        </div>
        { step == 1 && <Form1 increaseStep={increaseStep} formData={form1Data} setFormData={setForm1Data} />} 
        { step == 2  && <Form2 increaseStep={increaseStep} formData={form2Data} setFormData={setForm2Data} />}
        { step == 3 && <Form3 increaseStep={increaseStep} formData={form3Data} setFormData={setForm3Data} />}
      </div>
      {
        step > 1 
        && 
        <div>
          <a className='text-center text-md cursor-pointer underline block' onClick={decreaseStep}>Go Back </a>
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
