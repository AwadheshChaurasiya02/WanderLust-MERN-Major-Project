const Listing = require("../models/listing");

module.exports.trendingListings = async(req,res) => {
    let allListings=await Listing.find({category:"Trending"});

    if(allListings.length===0){
        req.flash("error","Trending destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.roomsListings = async(req,res) => {
    let allListings=await Listing.find({category:"Rooms"});

    if(allListings.length===0){
        req.flash("error","Rooms destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.iconicCitiesListings = async(req,res) => {
    let allListings=await Listing.find({category:"Iconic Cities"});

    if(allListings.length===0){
        req.flash("error","Iconic Cities destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}

module.exports.mountainsListings = async(req,res) => {
    let allListings=await Listing.find({category:"Mountains"});

    if(allListings.length===0){
        req.flash("error","Mountains destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.castlesListings = async(req,res) => {
    let allListings=await Listing.find({category:"Castles"});

    if(allListings.length===0){
        req.flash("error","Castles destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.amazingPoolsListings = async(req,res) => {
    let allListings=await Listing.find({category:"Amazing Pools"});

    if(allListings.length===0){
        req.flash("error","Amazing Pools destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.CampingListings = async(req,res) => {
    let allListings=await Listing.find({category:"Camping"});

    if(allListings.length===0){
        req.flash("error","Camping destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.farmsListings = async(req,res) => {
    let allListings=await Listing.find({category:"Farms"});

    if(allListings.length===0){
        req.flash("error","Farms destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}

module.exports.arcticListings = async(req,res) => {
    let allListings=await Listing.find({category:"Arctic"});

    if(allListings.length===0){
        req.flash("error","Arctic destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}


module.exports.domesListings = async(req,res) => {
    let allListings=await Listing.find({category:"Domes"});

    if(allListings.length===0){
        req.flash("error","Domes destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}

module.exports.boatsListings = async(req,res) => {
    let allListings=await Listing.find({category:"Boats"});

    if(allListings.length===0){
        req.flash("error","Boats destination is not available on wanderlust");
        return res.redirect("/listings");
    }

    res.render("listings/filters.ejs",{allListings});
}