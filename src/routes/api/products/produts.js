const express = require('express');
const router = express.Router();
const multer = require('multer');
const Productcontroler = require('../../../controler/product')

const upload = multer({
    dest:'images'
})

///api/product/upload
router.post('/upload',  upload.single('upload')   ,(req,res)=>{

    Productcontroler.submitProduct(req,(err,product)=>{
res.json(product)
    })


    ;;
}) 
module.exports=router