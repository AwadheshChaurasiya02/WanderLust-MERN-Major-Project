const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req,res) => {
    let allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");

    if(!listing){
       req.flash("error","Listing you requested for does not exit!"); 
       return res.redirect("/listings");
    }

    res.render("listings/show.ejs",{listing});
}


module.exports.createListing = async (req,res,next) => {
    let url=req.file.path;
    let filename=req.file.filename;
    let newListing= new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};


        const apiKey = process.env.GEOAPIFY_API_KEY;

        const apiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(newListing.location)}&apiKey=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.features.length > 0) {
            newListing.geometry = {
                type: "Point",
                coordinates: response.data.features[0].geometry.coordinates
            };
        }

        await newListing.save();

        req.flash("sucess","New listing created!");
        return  res.redirect("/listings");
}


module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);

    if(!listing){
       req.flash("error","Listing you requested for does not exit!"); 
       return res.redirect("/listings");
    }

    let originalImageUrl=listing.image.url;
    let newImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,newImageUrl});
}


module.exports.updateListing = async (req,res) =>{
    let {id} = req.params;
    let listing=req.body.listing;
    let editListing=await Listing.findByIdAndUpdate(id,{...listing},{ new: true, runValidators: true });

    if(typeof req.file !== "undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        editListing.image={url,filename};
        // await editListing.save();
    }


    try {
        const apiKey = process.env.GEOAPIFY_API_KEY;

        const apiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(editListing.location)}&apiKey=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.features.length > 0) {
            editListing.geometry = {
                type: "Point",
                coordinates: response.data.features[0].geometry.coordinates,
            };
        }
    } catch (err) {
        req.flash("error","Geocoding error" + err.message);
    }

        await editListing.save();
        req.flash("sucess","Listing updated!");
        res.redirect(`/listings/${id}`);
}


module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("sucess","Listing deleted!");
    res.redirect("/listings");
}






