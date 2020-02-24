// const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    product: {
        type: String, 
        required: true
    },
    PhoneNumber: {
        type: Number, 
        required: true
    },
     isVarified:{
         type:false
     },

    resetToken: String,
    resetTokenExpiration:Date


})


const Userprofile = mongoose.model('users',UserSchema);
module.exports = Userprofile



// UserSchema.methods.createPasswordResetToken = function() {
//     const resetToken = crypto.randomBytes(32).toString('hex');
  
//     this.passwordResetToken = crypto
//       .createHash('sha256')
//       .update(resetToken)
//       .digest('hex');
  
//     console.log({ resetToken }, this.passwordResetToken);
  
//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
//     return resetToken;
//   };