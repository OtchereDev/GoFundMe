import React,{useState} from 'react'
import NavBar from '../../../components/index/NavBar'
import SearchComp from '../../../components/index/SearchComp'
import ToggleMenu from '../../../components/index/ToggleMenu'
import SearchResult from '../../../components/search/SearchResult'
import { APIURL } from '../../../config/config'
import Head from 'next/head'
import router from 'next/router'

const Search = ({fundraisers}) => {
  const [showSearch,setShowSearch] = useState(false)
  const [toggler, setToggler] = useState(false)
  const {term} = router.query

  return (
    <div className="w-full pt-14 lg:pt-20 min-h-screen relative bg-white">
      <Head>
        <title>
          Fundraisers for "{term}" in all locations
        </title>
      </Head>
      <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
      <ToggleMenu toggler={toggler} setToggler={setToggler} />
      <NavBar  setShowSearch={setShowSearch} setToggler={setToggler} />
      <SearchResult fundraisers={fundraisers} type={"search"}/>

    </div>
  )
}

export const getServerSideProps=async({req,params})=>{
  const term = params.term

  const request = await fetch(`${APIURL}/fundraiser/search/${term}`)

  const data = await request.json()

  console.log("dd",data)

  return {
    props:{
      fundraisers:data
    }
  }
}

export default Search
