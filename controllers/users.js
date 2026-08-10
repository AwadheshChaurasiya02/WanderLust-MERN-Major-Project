const User = require("../models/user");

module.exports.renderSignUpForm = (req,res) => {
    res.render("./users/signup.ejs");
}

module.exports.signUp = async(req,res,next) => {
    try{
    let {username,email,password}=req.body;
    let newUser= new User({username,email});
    let registerUser=await User.register(newUser,password);
    req.login(registerUser,(err) => {
        if(err){
        return next(err);
        }
        req.flash("sucess","Welcome to WanderLust");
        res.redirect("/listings");
    });
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
}


module.exports.renderLoginForm = (req,res) => {
    res.render("./users/login.ejs");
}

module.exports.login = async(req,res) => {
    req.flash("sucess","Welcome back to WanderLust");
    let newRedirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(newRedirectUrl);
}


module.exports.signOut = (req,res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("sucess","You logged out");
        res.redirect("/listings");
    });
}