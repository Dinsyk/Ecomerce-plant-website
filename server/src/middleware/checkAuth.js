const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{      //next is a callback function
    try{
        // console.log(req.headers.authorization);
        const token=req.headers.authorization.split(' ')[1];
        const decodeToken=jwt.verify(token,'secret')
        console.log(decodeToken);
        req.userData={username:decodeToken.username,loginid:decodeToken.loginid}
        next();
    }catch(error){
        res.status(401).json({message:'Auth failed'});
    }
}