const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/ecommerse-plant?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const loginSchema=new Schema({
    username:{type:String},
    password:{type:String},
    role:{type:String}
})
const logindata=mongoose.model('logintable',loginSchema)
module.exports=logindata