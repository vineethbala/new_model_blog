var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
var expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator');
const userController = require("../controller/user");
var userSchema = require("../models/userdata");

var User = mongoose.model('User',userSchema);

var shareDate = require('../shareData');


router.get('/signup',function(req,res){
    res.render('/signup');

});
router.post('/signup', [
    // username must be an email
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('pass').isLength({ min: 5 }),
    check('pass').equals('cpass')
  ], 
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors) {
      return res.status(422).json({ errors: errors.array() });
    }
  
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.pass;
    const cpassword = req.body.cpass;
    let newUser = new User({
        name:name,
        email:email,
        username:username,
        password:password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            
            // res.send("saved")
            return res.redirect('/');
        }
    });
  });

  router.get('/login',function(req,res){
    res.render('/login');
});  
router.post('/login',function(req,res){
    var email_log = req.body.email;
    var password = req.body.logpass;
    console.log(email_log)
    User.findOne({ email:email_log }, function(err, user) {
        if (err) throw err;
        console.log(user)
        if(!user){
            return res.redirect("/");
        }
        else{
            shareDate.addDataSet('profile',user)
            return res.send(user);
        }
    })
    
});

module.exports = router;
