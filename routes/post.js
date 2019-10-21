var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var expressValidator = require('express-validator');
const userController = require("../controller/user");
var postSchema = require("../models/postdata");
var Postdetails = mongoose.model('Postdata',postSchema);

router.get("/home",function(req,res){
    res.render("/home");
});
router.post('/save', function(req,res){
    
    let postvalue = new Postdetails({
        content:req.body.post_data,
        name:req.body.create
    });
    
    postvalue.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.send(req.body);
        }
    });


});
router.post('/getAllPost', function(req,res){
    

    Postdetails.find({}, function(err, post) {
        res.send(post);
    })

});
module.exports = router;