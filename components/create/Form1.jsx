import React,{useState} from 'react'
import CountrySelector from './CountrySelect'
import CategorySelect from './CategorySelect'
import RaiseForSelect from './RaiseForSelect'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Form1 = ({increaseStep, formData, setFormData}) => { 

  const [amount,setAmount] =useState(1)
  const [title, setTitle] = useState("")
  const [raiseFor,setRaiseFor] = useState()
  const [beneficiary, setBeneficiary] = useState("")
  const [location, setLocation] = useState()
  const [category, setCategory] = useState() 


  const [maxTitle] = useState(90)
  const [allowNext, setAllowNext] = useState(false)

  const handleAmount=(e)=>{

    if(e.target.value.length>0 && parseInt(e.target.value)>0){
      setAmount(parseInt(e.target.value.replace(/[^0-9]+/g, "")))
    }
    else if (!e.target.value.length ) {
      setAmount("")
    }
    else{
      setAmount(1)
    }
  }

  const handleTitle=(e)=>{
    if (maxTitle >=e.target.value.length ){
      setTitle(e.target.value)
    }
  }

  const handleNext=()=>{
    if (!amount.toString().length) 
      return toast.error("Please provide an amount to raised")
    if (!title.length)
      return toast.error("Please provide a fundraiser title")
    if (!raiseFor)
      return toast.error("Please select who you are raising the funds for")
    if (raiseFor == 'Someone' && !beneficiary.length )
      return toast.error("Please provide who you are raising the fund for")
    if (!location)
      return toast.error("Please provide the location for this fundraiser")
    if (!category)
      return toast.error("Please select a category for the fundraiser")

    const data ={
      amount,
      title,
      raiseFor,
      beneficiary,
      location,
      category
    }

    setFormData(data)
    increaseStep()
  }

  const handleInit=()=>{
    setAmount(formData.amount)
    setTitle(formData.title)
    setRaiseFor(formData.raiseFor)
    setBeneficiary(formData.beneficiary)
    setLocation(formData.location)
    setCategory(formData.category)
  }

  useEffect(()=>{
    formData && handleInit()
  },[])
  
  return (
    <div>
      <div>
        <h3 className='text-center text-gray-800 my-4 text-lg font-semibold'>
          Enter Your Goal Here
        </h3>
        <div className="flex items-center border p-3 rounded-md my-5 lg:my-3">
          <h3 className="text-2xl">USD</h3>

          <div className="flex items-center">
            <input
              // type="number"
              min="1"
              value={amount}
              onChange={handleAmount}
              className="block w-full text-4xl md:text-5xl font-semibold text-right outline-none appearance-none"
            />
            <h3 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-0">
              .00
            </h3>
          </div>
        </div>
      </div>

  
      <div className="flex items-center border p-2 rounded-md my-4 lg:my-2 w-full">

        <div className="flex items-center w-full">
          <input
            value={title}
            onChange={handleTitle}
            // onFocus={(e) => setShowPayment(false)}
            placeholder='Campaigne title'
            className="block w-full text-lg  outline-none appearance-none placeholder-gray-300"
          />
        </div>
      
          <h3 className=" text-lg font-semibold text-gray-800 mb-0 px-2">
           {maxTitle - title.length}
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

      <RaiseForSelect setRaiseFor={setRaiseFor} raiseFor={raiseFor} />

      {
        raiseFor?.value == "Someone"
        &&
        <div>
          <input 
            className='w-full p-2 block outline-none border rounded-md' 
            placeholder='Enter name of Beneficatory'
            value={beneficiary}
            onChange={e=>setBeneficiary(e.target.value)}  />
        </div>
      
      }

      <CountrySelector location={location} setLocation={setLocation} />

      <CategorySelect category={category} setCategory={setCategory}  />

      <div>
        <p className='text-sm text-gray-400 my-4'>
          The platform is free for organizers. Transaction fee is 2.9 plus $0.30 per donation. By continuing, you agree to the GoFundMe terms and acknowledge receipt of our privacy policy
        </p>
      </div>

      
        <div className='my-2'>
          <button onClick={handleNext} className='w-full outline-none text-lg font-semibold bg-primary_green py-3 text-gray-50 rounded-md '>
            Next
          </button>
        </div>
   
 
      
  </div>
  )
}

export default Form1
