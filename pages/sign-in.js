import React from 'react'
import AuthNavBar from '../components/auth/auth-navbar'
import SignInForm from '../components/auth/SignInForm'
import Head from "next/head"


const SignIn = () => {
    return (
        <>
            <Head>
                <title>
                    Sign In | GoFundMe
                </title>
                
            </Head>
            
            <div className="text-primary_black relative lg:py-40 font-primary bg-gray-100 min-w-full min-h-screen">

                <AuthNavBar/>

                <SignInForm/>
    
            </div>

        </>
    )
}

export default SignIn
