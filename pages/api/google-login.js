import {APIURL} from "../../config/config"
import cookie from "cookie"

export default async (req,res)=>{
    
    if(req.method!=="POST") return res.status(400).send(`${req.method} is not Allowed`)

    const url = `${APIURL}/auth/v1/google/login`
    const body= req.body

    const request = await fetch(url,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
           ...body
            }),
    })

    const data = await request.json()

    if (!request.ok) return res.status(request.status).send({message:data.message})

    res.setHeader("Set-Cookie",[
        cookie.serialize("refresh_token",data.refresh_token,{
            httpOnly:true,
            maxAge: 60 * 60 * 24,
            secure:process.env.NODE_ENV !== "development",
            sameSite:'strict',
            path:"/"
        }),
        cookie.serialize("access_token",data.access_token,{
            httpOnly:true,
            maxAge: 60 ,
            secure:process.env.NODE_ENV !== "development",
            sameSite:'strict',
            path:"/"
        })
    ])

    res.send({})
    
}