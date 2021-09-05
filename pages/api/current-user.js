import refreshKey from "../../helpers/refresh-key"
import cookie from 'cookie'
import { APIURL } from "../../config/config"

export default async (req,res)=> {

    if (req.method==="POST"){

        if (!req.headers.cookie) return res.status(400).send()
        
        let {access_token,refresh_token} =  cookie.parse(req.headers.cookie)
        
        if (!refresh_token) return res.status(400).send()
        
        if (!access_token) {
            
            const handleRefresh = await refreshKey(refresh_token,res)
            
            if (!handleRefresh) res.status(401).send()
            
            access_token=handleRefresh
            
        }

        
        const userReq = await fetch(`${APIURL}/user`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "Authorization": `Bearer ${access_token}`
            },

        })
        
        

        if (!userReq.ok) return res.status(401).send()

        const data= await userReq.json()

        // console.log(data)

        return res.json(data)



    }else{
     
        res.status(400).send(`${req.method} is not Allowed`)
    }
}