const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postid:{
         type:String
    },
    comment:{
        type:String
    }
});
module.exports = CommentSchema;