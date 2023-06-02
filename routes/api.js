const mongoose=require("mongoose");
var express=require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const path = require("path")
const BrandController=require("../Components/Controller/BrandController")
const CategoryController=require("../Components/Controller/catergoryController");
const ProductController=require("../Components/Controller/productController");
router.get('/',(req,res)=>{
    res.send("Api is runing")
})

const imageStorage = multer.diskStorage({
    //Destination to store image
    destination: 'public/images',
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
        //gile.fieldname is name of the field (image)
        //path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000//10000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload an Image'))
        }
        cb(undefined, true)
    }
})

/** User module api */
router.post('/upload', imageUpload.single("image"), function (req, res, next) {
    console.log(req.file.filename)
    res.send(req.file)
})
router.post("/brand", imageUpload.single("image"),BrandController.create);
router.get("/brand",BrandController.Get);
router.put("/brand/:id",imageUpload.single("image"),BrandController.Update);
router.delete("/brand/:id",BrandController.Delete);
router.post("/category",imageUpload.single("image"),CategoryController.create);
router.get("/category",CategoryController.Get);
router.put("/category/:id",imageUpload.single("image"),CategoryController.update);
router.delete("/category/:id",CategoryController.Delete);
router.post("/product",imageUpload.single("image"),ProductController.create);
router.get("/product",ProductController.Get);
router.put("/product/:id",imageUpload.single("image"),ProductController.Update);
router.delete("/product/:id",imageUpload.single("image"),ProductController.Delete);
module.exports=router;