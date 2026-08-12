const Listing=require("./models/listing");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema, reviewSchema}=require("./schema.js");
const review = require("./models/review.js");

module.exports.isLoggedIn= (req,res,next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must logged in first then access listings");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirecturl=(req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error","This product does not exist in NexoraTech");
        return res.redirect("/listings");
    }

    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;

    let newReview = await review.findById(reviewId);

    if (!newReview) {
        req.flash("error", "Review not found");
        return res.redirect(`/listings/${id}`);
    }

    if (!newReview.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }

    next();
};


////////      for backend  validation      ////////////

module.exports.validateListing=(req,res,next) => {
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
}


module.exports.validateReview=(req,res,next) => {
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
}