const express=require('express')
const loginrouter=express.Router()
const logintable=require('../models/logintable')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

loginrouter.post('/login',async(req,res)=>{
    const{username,password}=req.body


    try{
        const oldusername=await logintable.findOne({username})
        if(!oldusername){
            return res.status(400).json({
                message:'username incorrect'
            })
        }

        const loginpass=await bcrypt.compare(password,oldusername.password)
        if(loginpass){
          


            const token=jwt.sign({
               username:oldusername.username,
               loginid:oldusername._id
            },'secret',{expiresIn:'1h'})   //here token is generated using a secret key.generally token is generated for authorization and authontication                  


            return res.status(200).json({
                success:true,
                error:false,
                data:oldusername,
                token:token,//here token is passed in to front end in token variable.
                message:'login successfull'
            })
        }else{
            return res.status(400).json({
                message:'login not success'
            })
        }
    }catch(err){
        res.status(400).json({
            message:'something went wrong'
        })
     }
})
module.exports=loginrouter
