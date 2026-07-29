const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirecturl } = require("../middleware.js");
const { renderSignUpForm, signUp, renderLoginForm, login, signOut } = require("../controllers/users.js");

router.get("/signup",renderSignUpForm);

router.post("/signup", wrapAsync(signUp));

router.get("/login",renderLoginForm);

router.post("/login",saveRedirecturl, passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}), login);


router.get("/logout",signOut);

module.exports=router;

