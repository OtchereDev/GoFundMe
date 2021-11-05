import React,{useState} from 'react'
import Head from 'next/head'
import SearchComp from '../../../../components/index/SearchComp'
import ToggleMenu from '../../../../components/index/ToggleMenu'
import NavBar from '../../../../components/index/NavBar'
import Mangefundraiser from '../../../../components/profile/manage/mangefundraiser'
import cookie from 'cookie'



const Index = () => {
  const [showSearch,setShowSearch] = useState(false)
  const [toggler, setToggler] = useState(false)

  

  return (
    <>

      <Head>
        <title>
          Manage Your Fundraiser
        </title>
      </Head>

      <div className="w-full min-h-screen relative bg-white">
        <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
        <ToggleMenu toggler={toggler} setToggler={setToggler} />
        <NavBar  
          setShowSearch={setShowSearch} 
          setToggler={setToggler} 
        />

        <div className="w-full z-0 py-10 bg-gray-100">

        </div>

        <Mangefundraiser/>
        <div className=" bg-gray-100 p-4 rounded-md z-0 my-5 mx-3 md:mx-10 lg:mx-40">
          <h4>
            Donations
          </h4>
        </div>
      </div>
      
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const { refresh_token } = cookie.parse(req.headers.cookie);

  if (!refresh_token)
    return { redirect: { permanent: false, destination: "/sign-in" } };

  return { props: {} };
};

export default Index
