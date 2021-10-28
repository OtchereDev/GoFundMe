import cookie from "cookie"
export default async (req,res)=>{
  if(req.method === "GET"){

    if (!req.headers.cookie) return res.status(400).send()
        
    let {refresh_token} =  cookie.parse(req.headers.cookie)
    
    if (!refresh_token) return res.status(400).send()
    else return res.json({"message":"success"})

  }else{
    return res.status(400).send({"message":"cannot handle request"})
  }

}