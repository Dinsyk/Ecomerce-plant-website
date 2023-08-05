const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/ecommerse-plant?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const addplantSchema=new Schema({

    image:{type:String},
    plantname:{type:String},
    plantprice:{type:String},
    plantdescription:{type:String},
    plantcategory:{type:String},
    login_id:{type:mongoose.Types.ObjectId,ref:'logintable'}//login id is passed asthe reference from logintable to identify wheather it is a user or admin



})
const addplantdata=mongoose.model('addplanttable',addplantSchema)
module.exports=addplantdata