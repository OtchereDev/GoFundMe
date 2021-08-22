import React, {useState} from 'react'
import NavBar from '../../../components/index/NavBar'
import SearchComp from '../../../components/index/SearchComp'
import ToggleMenu from '../../../components/index/ToggleMenu'
import Head from 'next/head'
import Header from '../../../components/detail/Header'
import Description from '../../../components/detail/Description'
import Footer from "../../../components/index/Footer"


const Detail = () => {

    const [showSearch,setShowSearch] = useState(false)
    const [toggler, setToggler] = useState(false)
    return (

        <>
            <Head>
                <title>
                    Fundraiser by Chelsea Clarke : Tragic accident of a young girl
                </title>
            </Head>
            <div className="w-full z-0 pt-14 lg:pt-20 min-h-screen">
                <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
                <ToggleMenu toggler={toggler} setToggler={setToggler} />
                <NavBar  setShowSearch={setShowSearch} setToggler={setToggler} />

                <Header/>

                <Description/>




                <Footer/>

            </div>
        </>
    )
}

export default Detail
