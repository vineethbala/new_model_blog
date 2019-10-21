var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var expressValidator = require('express-validator');
const userController = require("../controller/user");
var CommentSchema = require("../models/comments");
var Comments = mongoose.model('postcomments',CommentSchema);

router.get("/home",function(req,res){
    res.render("/home");
});
router.post('/saveComment', function(req,res){
    
    let commentvalue = new Comments({
        postid:req.body.postid,
        comment:req.body.comment
    });
    // console.log("sds");
    commentvalue.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.send(req.body);
        }
    });


});
router.post('/getCommentsById', function(req,res){    
    console.log(req.body.id)
    Comments.find({postid:req.body.id}, function(err, post) {
        console.log(post)
        res.send(post);
    })

});
module.exports = router;