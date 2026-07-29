const Listing = require("../models/listing");
const review = require("../models/review");



module.exports.createReview = async(req,res) => {
    let {id}=req.params;
    let listing=await Listing.findById(id);
    let newReview=new review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("sucess","New review created!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyReview = async(req,res) => {
    let{id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("sucess","Review deleted!");
    res.redirect(`/listings/${id}`);
}