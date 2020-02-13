const express = require('express');
const router = express.Router();
const multer = require('multer');


const upload = multer({
    dest:'images'
})
router.post('/upload',  upload.single('upload')   ,(req,res)=>{


    res.send( )
})