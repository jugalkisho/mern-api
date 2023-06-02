const mongoose=require('mongoose');
const category=require('../model/category');

const create=async(req,res)=>{
    await category.create({
        name: req.body.name,
        age: req.body.age,
        image: req.body.image
    }).then((data)=>{
        res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

const Get=async(req,res)=>{
    await category.find({}).then((data)=>{
        res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

const update=async(req,res)=>{
    await category.updateOne({
        _id: new mongoose.Types.ObjectId(req.params.id)
    },{
        name:req.body.name,
        age:req.body.age,
        image:req.body.image
    }).then((data)=>{
        res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

const Delete=async(req,res)=>{
    await category.deleteOne({
        _id: new mongoose.Types.ObjectId(req.params.id)
    }).then((data)=>{
        res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

module.exports={
    create,
    Get,
    update,
    Delete,
}
