const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/ecommerse-plant?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const registerSchema=new Schema({
    login_id:{type:mongoose.Types.ObjectId,ref:'logintable'},
    name:{type:String},
    phone:{type:String},
    address:{type:String},
    // photo:{type:String},
    username:{type:String},
    password:{type:String}
})
const registerdata=mongoose.model('registertable',registerSchema)
module.exports=registerdata