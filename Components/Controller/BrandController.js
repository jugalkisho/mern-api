const { default: mongoose } = require("mongoose");
const Brand= require("../model/brand")
const create = async (req, res) => {
   
    let dataObject = {
        name: req.body.name,
        age: req.body.age
    }
    if(req?.file){
        dataObject['image'] = req.file.filename
    }
    await Brand.create(
        dataObject
    ).then((data) => {
        // user create
        res.send(data);
    }).catch(error => {
        // some error
        res.send(error)
    })
}

const Get = async (req, res) => {

    await Brand.find({}).then((data) => {
        // user create
        res.send(data);
    }).catch(error => {
        // some error
        res.send(error)
    })
}



const Update = async (req, res) => {
    await Brand.updateOne(
        {
            _id: new mongoose.Types.ObjectId(req.params.id)
        },
        {
            name: req.body.name,
            age: req.body.age,
            image: req.file.filename
        }
    ).then((data) => {
        // user create
        res.send(data);
    }).catch(error => {
        // some error
        res.send(error)
    })
}

const Delete= async(req,res)=>{
    await Brand.deleteOne({
        _id: new mongoose.Types.ObjectId(req.params.id)
    }).then((data)=>{
       res.send(data)
    }).then((error)=>{
        res.send(error)
    })
}

module.exports = {
    create,
    Get,
    Update,
    Delete,
}