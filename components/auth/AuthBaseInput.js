import React from 'react'

const AuthBaseInput = ({type, placeholder, value, setValue}) => {
    return (
       <input type={type} placeholder={placeholder} className=" border rounded-md w-full px-3 py-3 my-2  lg:py-2 placeholder-gray-400 placeholder outline-none lg:text-lg" value={value} onChange={(e)=>setValue(e.target.value)} />
    )
}

export default AuthBaseInput
