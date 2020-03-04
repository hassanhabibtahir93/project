const Product = require('../module/products/product');
const productControler = {
    submitProduct:function(data,callback){
        let producatData = new Product();
     producatData.price = data.body.price;
     producatData.discount = data.body.discount;
     producatData.productname = data.body.productname;
     producatData.discription = data.body.discription;
     producatData.category = data.body.category;
    //  producatData.imgSrc = []
     
    data.files.forEach((file)=>{
        producatData.imgSrc.push('/files/'+file.originalname);
     });
     producatData.save(function(err,product){
            if(product){
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