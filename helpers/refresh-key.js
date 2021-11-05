import { APIURL } from "../config/config"
import cookie from "cookie"

export default async (refresh_token,response)=>{
    
    const res = await fetch(`${APIURL}/auth/refresh_token`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({refresh_token})
    })

    
    if (!res.ok) return 

    const {access_token} = await res.json()

    response.setHeader("Set-Cookie",[
        // cookie.serialize("refresh_token",refresh_token,{
        //     httpOnly:true,
        //     maxAge: 60 * 60 * 24*,
        //     secure:process.env.NODE_ENV !== "development",
        //     sameSite:'strict',
        //     path:"/"
        // }),
        cookie.serialize("access_token",access_token,{
            httpOnly:true,
            maxAge: 60 ,
            secure:process.env.NODE_ENV !== "development",
            sameSite:'strict',
            path:"/"
        })
    ])

    return access_token
    
}