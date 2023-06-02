const mongoose=require("mongoose");
const BrandSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:false
    }
})
const Brand=new mongoose.model("Brand",BrandSchema)
module.exports=Brand;