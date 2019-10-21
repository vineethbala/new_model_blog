const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
         type:String
     },
    content:{
        type:String
    }
    
});
module.exports = PostSchema;