const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname:String,
    description:String,
    name:String,
    category: String,
    imgSrc:String,
    fav:Boolean,
    user : {
        type:Schema.Types.ObjectId,
        ref:'users'
    }

})
const Produts= mongoose.model('products',productSchema);

module.exports = Produts