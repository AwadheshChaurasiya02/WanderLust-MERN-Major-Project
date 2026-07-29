const Listing=require("../models/listing.js");

module.exports.searchCountry = async (req,res) => {
    let {q}=req.query;

    if(!q){
        req.flash("error","Please provide a valid destination");
        return res.redirect(req.get("Referer") || "/listings");
    }

    let allListings=await Listing.find({country: new RegExp(`^${q}$`, "i")});

    if(allListings.length===0){
        req.flash("error","This destination is not available on wanderlust");
        return res.redirect(req.get("Referer") || "/listings");
    }
    
    res.render("listings/search.ejs",{allListings});
}


