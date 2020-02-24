const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../../../module/products/product');
const Productcontroler = require('../../../controler/product')

const upload = multer({
    dest:'images'
})

///api/product/upload
router.post('/upload',  upload.single('file')   ,(req,res)=>{

    Productcontroler.submitProduct(req,(err,product)=>{
res.json(product)
    })


    ;;
}) 



router.delete('/deleteProduct/:id',(req,res)=>{

    Product.findByIdAndDelete({_id:req.params.id}).then((profile)=>{

        res.json("product delete succefully")
    })

})

// router.delete('/deleteproduct',(req,res)=>{
//     Productcontroler.deleteProduct(req,()=>{
//         res.json("delete elemets successfull")
//     })
// })

module.exports=router