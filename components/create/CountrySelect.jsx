import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({location, setLocation}) {

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = e => {
    setLocation(e)
  }

  return <Select className={"my-2"} placeholder={"Select Your Country"} options={options} value={location} onChange={changeHandler} />
}

export default CountrySelector