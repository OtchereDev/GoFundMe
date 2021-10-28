import React,{useState} from 'react'
import cookie from "cookie"
import Head from "next/head"
import NavBar from '../../components/index/NavBar'
import SearchComp from '../../components/index/SearchComp'
import ToggleMenu from '../../components/index/ToggleMenu'
import CreateForm from '../../components/create/CreateForm'

const index = () => {
  const [showSearch,setShowSearch] = useState(false)
  const [toggler, setToggler] = useState(false)

  return (
    <>

      <Head>
        <title>
          Create a GoFundMe
        </title>
      </Head>

      <div className="w-full min-h-screen relative bg-white">
        <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
        <ToggleMenu toggler={toggler} setToggler={setToggler} />
        <NavBar  
          setShowSearch={setShowSearch} 
          setToggler={setToggler} 
        />

      <div className="w-full z-0 py-14 pt-20">

        <CreateForm/>

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

export default index
