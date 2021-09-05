import { APIURL } from "../../config/config"
import cookie from "cookie"

export default async function (req,res){
   

    if (req.method==="POST"){

        if (!req.body) return res.status(401).send()

        const {email,password,fullName} = req.body

        const request = await fetch(`${APIURL}/user/signup/`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email,password,fullName})
        })

        const data = await request.json()
        // console.log(data)

        if (!request.ok) return res.status(request.status).send({message:data.message})

        res.send({})

    }else{

        res.status(400).send(`${req.method} is not allowed`)
    }

}