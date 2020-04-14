const express = require('express');
const favRouter = express.Router();
// const favAdCtrl = require('../controller/fav');
const Products = require('../products/produts');
const Faourit = require('../../../module/favourit/favritAd')
const favConroler = require('../../../controler/Favourit')


favRouter.post('/favaddChanged',function(req,res){
    // console.log(req.body)
    // req.body.user = req.user
    favConroler.favAdClicked(req,function(err,ad){
        res.json(ad)
    })
})



favRouter.get('/get_fav_ads',function(req,res){


    favAdCtrl.showFavAds(req,function(err,ad){
        res.json(ad)
    })


})


module.exports = favRouter