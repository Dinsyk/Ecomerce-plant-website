const express=require('express')
const addplantrouter=express.Router()
const addplanttable=require('../models/addplanttable')
const bcrypt=require('bcryptjs')
const multer=require('multer')
const checkauth = require('../middleware/checkAuth')






// to add plants
addplantrouter.post('/addplant',checkauth,async(req,res)=>{
    const{image,plantname,plantprice,plantdescription,plantcategory,login_id}=req.body
    console.log(req.body);
    try{
        const addplantdata=await addplanttable.create({
          image,
          plantname,
          plantprice,
          plantdescription,
          plantcategory,
          login_id:req.userData.loginid
        })
        return res.status(200).json({success:true,error:false,message:'plants add successfully',data:addplantdata})
    }catch(err){
        res.status(400).json({
            error:err,
            message:'something went wrong'
        })
    }
})

// to add plant image
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../public/imageuploads')
    },
    filename:function(req,file,cb){
        cb(null,req.body.name)
    }
})
var upload=multer({storage:storage})
addplantrouter.post('/upload',upload.single('file'),(req,res)=>{
    return res.json('file uploaded')
})

//this is to view plants added by the admin.this data is maped in the frontend using map function
addplantrouter.get('/viewplant',(req,res)=>{
    addplanttable.find().then((details)=>{
        // console.log(details);
        res.status(200).json({
            data:details
        })
    })
})

// this is to view an individualplant when click form plants page
addplantrouter.get('/viewindividualplant/:individualplantid',(req,res)=>{
    const id=req.params.individualplantid
    // console.log(id);
    addplanttable.findOne({_id:id}).then((plantdetails)=>{
        res.status(201).json({
            individualplantview:plantdetails
        })
    })
})
module.exports=addplantrouter