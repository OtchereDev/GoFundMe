import React from 'react'
import Select from "react-select"

const RaiseForSelect = ({setRaiseFor,raiseFor}) => {

  const options = [
    {value:"Myself", label:"Myself"},
    {value:"Someone", label:"Someone else"},
  ]

  const changeHandler = e => {
    setRaiseFor(e)
  }

  return <Select className={"my-4 lg:my-2"} placeholder={"Who are you raising the funds for ?"} options={options} value={raiseFor} onChange={changeHandler} />
}

export default RaiseForSelect
