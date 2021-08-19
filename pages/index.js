import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/index/Header'
import NavBar from '../components/index/NavBar'
import SearchComp from '../components/index/SearchComp'
import ToggleMenu from '../components/index/ToggleMenu'
import TopFundraisers from '../components/index/TopFundraisers'
import Benefit from '../components/index/Benefit'
import NearFundraisers from '../components/index/NearFundraisers'
import CTA from '../components/index/CTA'
import Footer from '../components/index/Footer'

export default function Home() {

  const [showSearch,setShowSearch] = useState(false)
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <Head>
        <title>
          GoFundMe: No.1 Fundraising Platform for Crowdfunding
        </title>
      </Head>
      <div className="w-full min-h-screen relative bg-white">
        <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
        <ToggleMenu toggler={toggler} setToggler={setToggler} />
        <NavBar  setShowSearch={setShowSearch} setToggler={setToggler} />



        <div className="w-full z-0 pt-14 lg:pt-20">
          <Header/>
          <TopFundraisers/>
          <Benefit/>
          <NearFundraisers/>
          <CTA/>
          <Footer/>

        </div>
      </div>
    
    </>
  )
}
