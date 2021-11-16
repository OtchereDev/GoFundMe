import React from 'react'
import Select from 'react-select'
import {useQuery,gql} from "@apollo/client"

function CategorySelect({category, setCategory}) {
  let options = []

  const GET_CATEGORIES = gql`
    query GET_CATEGORIES{
      categories{
        id
        name
      }

    }
  `

  const {loading,data,error} = useQuery(GET_CATEGORIES)

  if (data) options = data.categories?.map(category=>{return {value:category.id, label: category.name}})

  const changeHandler = e => {
    setCategory(e)
  }

  return <Select className={"my-4 lg:my-2"} placeholder={"Category"} options={options} value={category} onChange={changeHandler} />
}

export default CategorySelect
