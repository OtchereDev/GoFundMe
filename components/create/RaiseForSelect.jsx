import React,{useState} from 'react'
import Select from "react-select"

const RaiseForSelect = () => {
  const [value, setValue] = useState('')
  // const options = useMemo(() => countryList().getData(), [])
  const options = [
    {value:"Myself", label:"Myself"},
    {value:"Someone", label:"Someone else"},
    

  ]

  const changeHandler = value => {
    setValue(value)
  }

  return <Select className={"my-2"} placeholder={"Who are you raising the funds for ?"} options={options} value={value} onChange={changeHandler} />
}

export default RaiseForSelect
