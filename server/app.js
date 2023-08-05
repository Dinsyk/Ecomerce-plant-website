const express=require('express')
const app=express()
const loginrouter=require('./src/routes/loginrouter')
const registerrouter=require('./src/routes/registerrouter')
const addplantrouter=require('./src/routes/addplantrouter')
const cartrouter=require('./src/routes/cartrouter')
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
})
app.use('/login',loginrouter)
app.use('/register',registerrouter)
app.use('/addplant',addplantrouter)
app.use('/cart',cartrouter)



















app.listen(4000,()=>{
    console.log('server started @ http://localhost:4000');
})