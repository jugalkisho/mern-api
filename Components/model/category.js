const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:false
    }
})

const category=new mongoose.model("category",categorySchema);
module.exports=category;