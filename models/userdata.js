const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})
module.exports = UserSchema;
//const User = module.exports = mongoose.model('User',UserSchema);
//export default User;

