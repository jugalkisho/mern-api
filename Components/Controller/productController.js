const { default: mongoose } = require('mongoose')
const product=require('../model/product')

const create=async(req,res)=>{
    await product.create({
        name:req.body.name,
        sku:req.body.sku,
        price:req.body.price,
        sale_price:req.body.sale_price,
        image:req.body.image
    }).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
}

const Get=async(req,res)=>{
    await product.find({}).then((data)=>{
        res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

const Update=async(req,res)=>{
    await product.updateOne({
        _id:new mongoose.Types.ObjectId(req.params.id)
},{
   name:req.body.name,
   sku:req.body.sky,
   price:req.body.price,
   sale_price:req.body.sale_price,
   image:req.body.image 
}).then((data)=>{
    res.send(data)
}).then((error)=>{
    res.send(error)
})
}

const Delete=async(req,res)=>{
    await product.deleteOne({
        _id:new mongoose.Types.ObjectId(req.params.id)
    }).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
}

module.exports={
    create,
    Get,
    Update,
    Delete,
}
