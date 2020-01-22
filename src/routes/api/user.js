const express = require('express');
const Userprofile =require('../../module/user/userprofile');
//bcrypt product
const bcrypt = require('bcryptjs')
//jsonwebTocken
const jwt = require('jsonwebtoken');
//router
const router = express.Router();
//keys
const keys = require('../../config/key');
//passport
const passport = require('passport');


//errosrs
let errors;


//user signUp
// /api/users

router.post('/rejister',(req,res)=>{
    Userprofile.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
              const errors="user already exist"
              return res.status(400).json(errors)     
        }
        else{
            const newUser = new Userprofile({
                 name:req.body.name,
                 email:req.body.email,
                 password:req.body.password,
                 product:req.body.product
             })


             bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password ,salt,(err,hash)=>{
                    if(err) throw err
              newUser.password=hash
              //save and send to client
              newUser.save().then((user)=>{res.json(user)})
              .catch(err=>{console.log(err)})

                })
             })



            }
            })


})

//user login 
///api/users



router.post('/login',(req,res)=>{


 const email=req.body.email;
 const password = req.body.password;
 Userprofile.findOne({email}).then((user)=>{
     if(!user){
        errors="user not found"
        return res.status(404).json(errors)
     }


     bcrypt.compare(password,user.password)
     .then((isMatch)=>{
        if(isMatch){

            const payload={id:user.id, name:user.name}
            //using token
            jwt.sign(payload,
             keys.secretOrkey,
             {expiresIn: 5000 },
             (err,token )=>{
                 res.json({
                     success:true,
                     token:'Bearer '+token
                 })
               }   
             
             )


        }
        else{
            errors ="passsword in corect";
            return res.status(400).json(errors)
        }
     })


 })



})




router.get(
    '/user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );


module.exports= router

