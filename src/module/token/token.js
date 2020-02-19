var mongoose = require( 'mongoose' )
var Schema = mongoose.Schema;

const   forgotSchema= new Schema({
    
 email:{type:String,required: [true, 'Email must be provieded']},
 resetToken: String,
 resetTokenExpiration: Date



})
const UserForgot = mongoose.model( 'UserForgot',   forgotSchema );

module.exports = UserForgot;