const Product = require('../module/products/product');
const productControler = {
    submitProduct:function(data,callback){
        let producatData = new Product(data.body);

    //  producatData.productname = data.body.productname;
    //  producatData.description = data.body.description;
    //  producatData.name = data.body.name;
    //  producatData.category = data.body.category;
     producatData.imgSrc = data.file.path;
     producatData.fav = false

     producatData.user = data.user 
    
     producatData.save(function(err,ad){
            if(ad._id){
                callback(err,ad)
            }
        })
    
    },
  

}

module.exports = productControler