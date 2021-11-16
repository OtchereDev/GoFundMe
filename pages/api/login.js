import { APIURL } from "../../config/config"
import cookie from "cookie"

export default async function (req,res){
   

    if (req.method==="POST"){

        if (!req.body) return res.status(401).send()

        const {email,password} = req.body

        const request = await fetch(`${APIURL}/auth/login/`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        })

        const data = await request.json()
        // console.log(data)

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
                maxAge: 60  ,
                secure:process.env.NODE_ENV !== "development",
                sameSite:'strict',
                path:"/"
            })
        ])

        res.send({})

    }else{

        res.status(400).send(`${req.method} is not allowed`)
    }

}