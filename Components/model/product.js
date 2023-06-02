const { default: mongoose } = require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    sku:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    sale_price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:false
    }
})

const product = new mongoose.model("product",ProductSchema)
module.exports=product;