const express = require("express");
const router = express.Router();
module.exports = router;
const controller = require("../controller/user");
// const adminController = require("../controller/admin");

router.get("/", controller.getLoginForm);
// router.get("/forms/signup",controller.getSignupForm);

router.get("/signup", controller.getSignupForm);
router.get("/home",controller.gethomePage);

// form/getprod/5cdd963cb392d829f8d0f616

module.exports = router;