import React, {useState} from 'react'
import NavBar from '../../../components/index/NavBar'
import SearchComp from '../../../components/index/SearchComp'
import ToggleMenu from '../../../components/index/ToggleMenu'
import Head from 'next/head'
import Header from '../../../components/detail/Header'
import Description from '../../../components/detail/Description'
import Footer from "../../../components/index/Footer"
import { APIURL } from '../../../config/config'


const Detail = ({data}) => {

    const [showSearch,setShowSearch] = useState(false)
    const [toggler, setToggler] = useState(false)

    const {amountRaised,
        goal_amount,
        image_url,
        donations,
        title,
        createdAt,
        organiser,
        category,
        description}=data

    return (

        <>
            <Head>
                <title>
                    Fundraiser by {data.organiser} : {data.title}
                </title>
            </Head>
            <div className="w-full z-0 pt-14 lg:pt-20 min-h-screen">
                <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
                <ToggleMenu toggler={toggler} setToggler={setToggler} />
                <NavBar  setShowSearch={setShowSearch} setToggler={setToggler} />

                <Header amountRaised={amountRaised} goal_amount={goal_amount} image_url={image_url} donations={donations} />

                <Description title={title} createdAt={createdAt} organiser={organiser} category={category} description={description} donations={donations} />




                <Footer/>

            </div>
        </>
    )
}

export const getServerSideProps=async(req,res)=>{
    const uuid = req.params.uuid
    const request = await fetch(`${APIURL}/fundraiser/detail/${uuid}`)
    
    if (!request.ok) return {redirect:"/"}
    const data = await request.json()



    return {
        props:{data}
    }

}

export default Detail
