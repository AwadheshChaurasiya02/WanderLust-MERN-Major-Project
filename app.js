const dns = require('dns');
// Google DNS ko set kar rahe hain
dns.setServers(['8.8.8.8', '8.8.4.4']);

if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const { default: MongoStore } = require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listings.js");
const reviewRouter=require("./routes/reviews.js");
const userRouter=require("./routes/users.js");
const searchRouter=require("./routes/search.js");
const filtersRouter=require("./routes/filters.js");


const dbUrl = process.env.MONGO_ATLAS_URL;

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});


const sessionOption={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';


app.listen(8080,() => {
    console.log("listening on port 8080");
});

app.get("/",(req,res) => {
    res.redirect("/listings");
});



main()
.then(() =>{
    console.log("sucessful connected to db");
})
.catch((err) => {
    console.log(err);
});



async function main() {
  await mongoose.connect(dbUrl);
}



app.use((req,res,next) => {
    res.locals.sucessmsg=req.flash("sucess");
    res.locals.errormsg=req.flash("error");
    res.locals.currUser=req.user;
    next();
});


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
app.use("/",searchRouter);
app.use("/",filtersRouter);



////////   page not found route   //////

app.all("/*splat",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"));
});


///////// error handling middleware  //////


app.use((err,req,res,next)=>{
    let {statusCode=500,message="Some Error Occured"}=err;
    res.status(statusCode).render("error.ejs",{message});
});



