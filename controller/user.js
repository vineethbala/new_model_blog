const ObjectId = require("mongodb").ObjectID;
const Users = require("../models/userData");


const { validationResult } = require("express-validator");
// const bcrypt = require("bcrypt");
module.exports.getLoginForm = (req, res, next) => {
  res.render("forms/login", {
    pageTitle: "Login",
    path: "/forms/login",
    message: false,
    
  });
};
module.exports.getSignupForm = (req,res) =>
{
  res.render("forms/signup",{
    pageTitle:"Signup",
    path: "/signup",
    message:false,
  });
};
module.exports.gethomePage = (req,res) =>
{
  res.render("dashboard/home",{
    pageTitle:"Home",
    path: "/home",
    message:false,
  });
};