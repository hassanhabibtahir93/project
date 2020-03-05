const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../../../module/products/product');
const Productcontroler = require('../../../controler/product')
const passport = require('passport');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'static/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+''+file.originalname);
    }
});

const imageFilter = function (req, file, cb) {
    //accept image files only
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

//upload
// fileFilter: imageFilter
var upload = multer({ storage: storage,  })
///api/product/upload
router.post('/upload',
passport.authenticate('jwt', { session: false }),
upload.array('files',7), (req, res) => {
      console.log(req.user)
    // if (!req.files) {
    //     return res.send('Please upload File')

    // }
    //else if(req.files){

        Productcontroler.submitProduct(req, (err, product) => {
            res.json(product)
        })
    //}





})

// router.delete('/deleteProduct/:id', (req, res) => {

//     Product.findByIdAndDelete({ _id: req.params.id }).then((profile) => {

//         res.json("product delete succefully")
//     })

// })

// router.delete('/deleteproduct',(req,res)=>{
//     Productcontroler.deleteProduct(req,()=>{
//         res.json("delete elemets successfull")
//     })
// })

module.exports = router