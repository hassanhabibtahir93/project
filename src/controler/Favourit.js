const Fav = require('../module/favourit/favritAd');
const Produts = require('../module/products/product')

const favAdController = {
    favAdClicked:function(data,cb){
console.log(data)

        //Changing kerni hai app k check box k liye
        Fav.findOne({user:data.body.user,adId:data.body._id},function(err,ad){
            if(ad){
                Produts.findByIdAndUpdate(data.body._id,{$set:{fav:false}},function(err,fav){
                    // console.log(err||fav)
                })
                // console.log(Ads,Fav)
                Fav.findByIdAndDelete(ad._id,function(data,res){
                    cb(err,{found:true})
                })
            }else{
                Produts.findByIdAndUpdate(data.body._id,{$set:{fav:true}},function(err,fav){
                    // console.log(err||fav)
                })
                console.log(Produts,Fav)
                let favAd = new Fav();
                favAd.adId = data.body._id;
                favAd.user = data.body.user ;
                favAd.save(function(err,ad){
                    if(ad._id){

                        cb(err,ad)
                    }
                })   
            }
        })

    },
    // showFavAds:function(data,cb){
    //     Fav.find({"user":data.user._id}).populate('adId').exec(function(err, fav){


    //        let userFavads = fav.map(function(fav){
    //                 return fav.adId;
    //         });

    //         cb(null, userFavads);
            // if(ads.length > 0){
            //     Ads.find({"user":ads[0].user,"_id":ads[0].adId},function(err,ad){
            //         if(ad.length > 0){
            //             console.log(ad)
            //             cb(err,ad)
            //         }else{
            //             cb(err,{success:false})
            //         }
            //     })
            // }else{
            //     cb(err,{success:false})
            // }
    //     })
    // }




}

module.exports = favAdController