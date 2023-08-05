const express=require('express')
const cartrouter=express.Router()
const carttable=require('../models/carttable')
const cartdata = require('../models/carttable')
const checkauth=require('../middleware/checkAuth')
const mongoose=require('mongoose')

cartrouter.post('/addcart',checkauth,async(req,res)=>{
  
    const {loginid,productid,count}=req.body
    console.log('loginid='+req.userData.loginid);



    
    
    // const proid=  parseFloat(req.body.productid)
    // console.log(proid);
    console.log('productid='+req.body.productid);
    try{

      const old_data=await carttable.find({loginid:req.userData.loginid,productid:req.body.productid})
      console.log('old_data======>'+old_data);
      if(old_data[0]){
        return res.status(400).json({
          success:false,
          error:true,
          message:'already added'

        })
      }else{


        const cartdata=await carttable.create({
            loginid:req.userData.loginid,
            productid:req.body.productid,
            count:'1'
        })
      
      
        
        return res.status(200).json({success:true,error:false,message:'cart added successfully',data:cartdata})
      }
      
    } catch(err){
        res.status(400).json({
            error:err,
            message:'Something went wrong'
        })
    }
  

    
    

    // if(old_data)


})




//code for aggreggation
//by calling this API in frontend we get these all details in our view cart page in frontend
//here we only done aggreggation of carttable and addplanttable.so by donig this(that is calling this API in cart page in frontend we can see all details in cart page.but we only want to see one user cart details for that perticular user.so we want to match the loginid ofthe user and loginid from the token.that will be done in next section.)
cartrouter.get('/viewcarts',checkauth,async(req,res)=>{
  const loginid=req.userData.loginid
  const Objectid=mongoose.Types.ObjectId

    carttable.aggregate([
        {
          '$lookup': {
            'from': 'addplanttables', 
            'localField': 'productid', 
            'foreignField': '_id', 
            'as': 'result'
          }
        },
        {
          '$unwind':'$result'// to unwind the result array
        },
        {
          '$match':{'loginid':new Objectid(loginid)}//to match loginid in checkauth with loginid in carttable
        },
        {
          '$group':{//to do grouping between carttable and result object
            '_id':'$_id',
            'loginid':{'$first':'$loginid'},
            'productid':{'$first':'$productid'},
            'count':{'$first':'$count'},
            'plantimage':{'$first':'$result.image'},
            'plantname':{'$first':'$result.plantname'},
            'plantprice':{'$first':'$result.plantprice'}

          }
        }
      ]).then((cartdetails)=>{
        console.log(cartdetails);
        res.json(cartdetails)
       
      })
      

})

cartrouter.post('/incrementcount/:cartid',(req,res)=>{
  const id=req.params.cartid
  console.log(id);
  cartdata.findOne({_id:id}).then((cartdetails)=>{
    console.log(cartdetails);
    res.json(cartdetails)

    const newCount=parseInt((cartdetails.count))+1
    console.log(newCount);

    
  cartdata.findByIdAndUpdate({_id:id},{$set:{count:newCount}}).then((increment)=>{
    if(increment>0){
      return res.status(200).json({
        success:true,
        error:false,
        cartdetails:increment,
        message:'updated'
      })
    }
  })
  })

  
  
})



cartrouter.post('/decrementcount/:cartid',(req,res)=>{
  const id=req.params.cartid
  console.log(id);
  cartdata.findOne({_id:id}).then((cartdetails)=>{
    console.log(cartdetails);
    res.json(cartdetails)

    const newCount=parseInt((cartdetails.count))-1
    console.log(newCount);

    
  cartdata.findByIdAndUpdate({_id:id},{$set:{count:newCount}}).then((decrement)=>{
    if(decrement>0){
      return res.status(200).json({
        success:true,
        error:false,
        cartdetails:decrement,
        message:'updated'
      })
    }
  })
  })

  
  
})





module.exports=cartrouter

