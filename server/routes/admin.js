const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const admin=require('../model/admin')


const jwtsec="ajhvwahwbbhdbw"

router.get('/',async (req,res)=>{
    const data=await admin.find()
    res.json(data)
    console.log(data)
})
router.post('/login',async (req,res)=>{
    try{
        const {email}=req.body
        console.log(req.body)
        const cred=await admin.findOne({email})
        console.log(cred)
        if(!cred){
            res.status(401).json({err:"Invalid"})
        }
        if(cred && cred.pwd!==req.body.pwd)
            res.status(401).json({err:"Invalid"})
        // res.status(200).send("done")
        const token=jwt.sign(
            {
                email:email,
            },jwtsec
        )
        res.cookie('token',token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
        }).send()
    }catch(err){
        console.log(err)
    }

})
router.get("/logout",(req,res)=>{
    res.cookie('token',"",{
        httpOnly:true,
        expires:new Date(0),
        secure:true,
        sameSite:"none"
    }).send()
})

router.get("/loggedin",(req,res)=>{
    try{
        const t = req.headers.cookie.split(";").find(c => c.trim().startsWith("token="));
        const token=t.substring(7,)
        console.log(token)
        if(!token) return res.json(false)
        jwt.verify(token,jwtsec)
        res.send(true)
    }catch(err){
        res.json(false)
    }
})
module.exports=router
