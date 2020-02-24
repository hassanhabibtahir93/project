const Product = require('../module/products/product');
const productControler = {
    submitProduct:function(data,callback){
        let producatData = new Product();

     producatData.productname = data.body.productname;
    //  producatData.description = data.body.description;
     producatData.name = data.body.name;
    //  producatData.category = data.body.category;
     producatData.imgSrc = data.file.path;
    //  producatData.fav = false

     producatData.user = data.user 
     
     producatData.save(function(err,product){
            if(product._id){
                callback(err,product)
            }
        })
    
    },
  



    // deleteProduct:(data,callback)=>{

    //     Product.findByIdAndRemove(data.body,id,()=>{
    //         console.log("remove the product from the products")
    //     })

    //     callback();
    // }

}

module.exports = productControler