import React, { useState, useMemo } from 'react'
import Select from 'react-select'

function CategorySelect() {
  const [value, setValue] = useState('')
  // const options = useMemo(() => countryList().getData(), [])
  const options = [
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},

  ]

  const changeHandler = value => {
    setValue(value)
  }

  return <Select className={"my-2"} placeholder={"Category"} options={options} value={value} onChange={changeHandler} />
}

export default CategorySelect
