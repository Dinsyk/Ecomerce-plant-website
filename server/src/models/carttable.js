const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/ecommerse-plant?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const cartSchema=new Schema({
    loginid:{type:mongoose.Types.ObjectId,ref:'logintable'},
    productid:{type:mongoose.Types.ObjectId,ref:'addplanttable'},
    count:{type:String}
   
})
const cartdata=mongoose.model('carttable',cartSchema)
module.exports=cartdata