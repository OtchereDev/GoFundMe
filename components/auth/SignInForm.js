import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import AuthBaseInput from './AuthBaseInput'
import Link from 'next/link'
import {useState}  from 'react'
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
import {toast}  from "react-toastify"
import {useRouter} from "next/router"
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/slices/userSlice'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';


const SIgnInForm = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color:"green" }} spin />


    const {login,checkUserLoggedIn,setUser} = useContext(AuthContext)

    const dispatch = useDispatch()

    const router = useRouter()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setBtnLoading(true)
        if (email.length && password.length){
            
            await login({email,password})
            return setBtnLoading(false)
        } 
        setBtnLoading(false)
        toast.error("Please fill in the input")

    }

    const responseGoogle = async(response) => {

        const url = "/api/google-login"

        const res = await fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                token: response.tokenId
              }),
        })

        if (!res.ok) return toast.error("Something went wrong... please try again")

        const currentUser = await checkUserLoggedIn()
        if (currentUser) {
            setUser(() => currentUser?.full_name);
    
            dispatch(registerUser(currentUser?.full_name));
          }

        router.push("/")
      }


    return (
        <div className="w-full h-screen lg:h-full shadow-lg pt-20 lg:pt-2 lg:w-8/12 bg-white mx-auto rounded-md">
            <div className="lg:border-b">
                <h1 className="text-2xl md:text-4xl   font-semibold text-center pt-8 pb-2 lg:pb-10">
                    Sign In
                </h1>
            </div>

            <div className="w-10/12 md:w-8/12 lg:w-5/12 mx-auto ">
                <div className="py-7">
                    <a href="/" className="focus:outline-none">
                    <GoogleLogin
                        clientId="990750877166-rompnb60e7kqho9a4a2p2khc2dj26ebc.apps.googleusercontent.com"
                        // responseType="code"                 
                        render={renderProps => (
                        
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="py-3 px-4 lg:px-7 shadow-lg w-full outline-none mx-auto rounded-md flex justify-center items-center text-gray-50 bg-red-400">
                            {
                                renderProps.disabled
                                ?
                                <Spin indicator={antIcon} />
                                :
                                <>
                                
                                    <span>
                                    <FontAwesomeIcon icon={faGoogle} />  
                                    </span>
                                    <span className="ml-2 font-semibold lg:font-medium">

                                        Log In with Google
                                    </span>
                                </>
                            }
                        </button>

                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        // cookiePolicy={''}
                    />
                    </a>
                </div>
                <div className="flex justify-center items-center pb-5">
                    <div className="w-3/12  bg-gray-300" style={{height:"1px"}}>

                    </div>
                    <div className="mx-5">
                        OR
                    </div>
                    <div className="w-3/12 bg-gray-300" style={{height:"1px"}}>

                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mb-10 flex justify-center items-center flex-col w-full">
                    <AuthBaseInput type="email" value={email} setValue={setEmail} placeholder="Email address" />
                    <AuthBaseInput type="password" value={password} setValue={setPassword} placeholder="Password" />
                    <button className="w-full py-3 outline-none border border-primary_green bg-white text-primary_green font-semibold rounded-md mt-5" disabled={btnLoading}>
                    {
                                btnLoading
                                ?
                                <Spin indicator={antIcon} />
                                :
                                "Sign in to GoFundMe"
                            }
                        
                    </button>
                </form>
            </div>

            <hr/>

            <div className="text-center py-10">
                <Link href="/">
                
                    <a className="text-primary_green font-medium  ">
                        Forgot your password
                    </a>
                </Link>
            </div>

            
        </div>
    )
}

export default SIgnInForm
