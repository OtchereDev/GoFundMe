import React from 'react'
import AuthBaseInput from './AuthBaseInput'
import Link from 'next/link'
import {useState}  from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';


const SignUpForm = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [fullName,setFullname]=useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color:"white" }} spin />

    const {signup} = useContext(AuthContext)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setBtnLoading(true)
        signup({email,password,fullName})
        setBtnLoading(false)
    }
    return (
    
            <div className="w-full h-screen lg:h-full shadow-lg pt-20 lg:pt-2 lg:w-8/12 bg-white mx-auto rounded-md">
                <div className="lg:border-b">
                    <h1 className="text-2xl md:text-4xl   font-semibold text-center pt-8 pb-2 lg:pb-10">
                        Sign Up
                    </h1>
                </div>

                <div className="w-10/12 md:w-8/12 lg:w-5/12 mx-auto ">
                                
                    <form onSubmit={handleSubmit} className="my-10 flex justify-center items-center flex-col w-full">
                        <AuthBaseInput type="text" value={fullName} setValue={setFullname} placeholder="Full Name" />
                        <AuthBaseInput type="email" value={email} setValue={setEmail} placeholder="Email address" />
                        <AuthBaseInput type="password" value={password} setValue={setPassword} placeholder="Password" />
                        <button className="w-full py-3 border outline-none bg-primary_green text-white  font-semibold rounded-md mt-5" disabled={btnLoading}>
                            {
                                btnLoading
                                ?
                                <Spin indicator={antIcon} />
                                :
                                "Next"
                            }
                        </button>
                    </form>
                </div>

                <hr/>

                <div className="text-center py-10">
                    <Link href="#">
                    
                        <a className="text-primary_green font-medium  ">
                            Forgot your password
                        </a>
                    </Link>
                </div>

                
            </div>
        
    )
}

export default SignUpForm
