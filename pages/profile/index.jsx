import React,{useState} from 'react'
import Head from "next/head"
import SearchComp from "../../components/index/SearchComp"
import ToggleMenu from "../../components/index/ToggleMenu"
import NavBar from "../../components/index/NavBar"
import ProfileHeader from '../../components/profile/ProfileHeader'
import YourFundraiser from '../../components/profile/YourFundraiser'

const index = () => {

  const [showSearch,setShowSearch] = useState(false)
  const [toggler, setToggler] = useState(false)

  return (

    <>
      <Head>
        <title>
          Your Profile
        </title>
      </Head>
      <div className="w-full min-h-screen relative bg-white">

        <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
        <ToggleMenu toggler={toggler} setToggler={setToggler} />
        <NavBar  setShowSearch={setShowSearch} setToggler={setToggler} />

        <div className="w-full mx-auto md:w-7/12 z-0 pt-24 px-4">
          <ProfileHeader/>
          <YourFundraiser/>
        </div>
        
      </div>
    
    </>
  )
}

export default index
