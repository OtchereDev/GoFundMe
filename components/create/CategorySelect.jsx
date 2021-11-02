import React from 'react'
import Select from 'react-select'

function CategorySelect({category, setCategory}) {
  const options = [
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},
    {value:"Health", label:"Health"},

  ]

  const changeHandler = e => {
    setCategory(e)
  }

  return <Select className={"my-2"} placeholder={"Category"} options={options} value={category} onChange={changeHandler} />
}

export default CategorySelect
