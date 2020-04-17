const express = require('express');
const favRouter = express.Router();
// const favAdCtrl = require('../controller/fav');
const Products = require('../products/produts');
const Faourit = require('../../../module/favourit/favritAd')
const favConroler = require('../../../controler/Favourit')
const passport = require('passport');

favRouter.post('/favaddChanged',

// passport.authenticate('jwt', { session: false }),

function(req,res){
    // console.log(req.body)
    // req.body.user = req.user
    favConroler.favAdClicked(req,function(err,ad){
        res.json(ad)
    })
})



favRouter.get('/getFavouritadd'
,
passport.authenticate('jwt', { session: false }),
function(req,res){

    favConroler.showFavouritProduct(req,function(err,ad){
        res.json(ad)
    })


})


module.exports = favRouter