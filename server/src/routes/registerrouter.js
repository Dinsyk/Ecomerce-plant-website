const express=require('express')
const registerrouter=express.Router()
const registertable=require('../models/registertable')
const bcrypt=require('bcryptjs')
const logintable = require('../models/logintable')

registerrouter.post('/register',async(req,res)=>{
    
    
    const{name,phone,address,username,password}=req.body
     
    try{
        const oldusername=await registertable.findOne({username})
        if(oldusername){
            return res.status(400).json({
                message:'username already exsists'
            })
        }
        
        const hashpass= await bcrypt.hash(password,10)
        const logindata=await logintable.create({
            username,
            password:hashpass,
            role:'user'
        })
        console.log(logindata);
        const registerdata=await registertable.create({
            name,
            phone,
            address,           
            login_id:logindata._id
        })
        return res.status(200).json({success:true,error:false,message:'registration compleated',data:registerdata})
    }catch(err){
        res.status(400).json({
            message:'somethong went wrong'
        })
    }
})
module.exports=registerrouter
