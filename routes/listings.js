const express=require("express");
const router= express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const { index, renderNewForm, showListing, createListing, renderEditForm, updateListing, destroyListing } = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
.get(wrapAsync(index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(createListing))

router.get("/new",isLoggedIn,renderNewForm);
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(renderEditForm));

router.route("/:id")
.get(wrapAsync(showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(destroyListing))


module.exports=router;



//////    index route    //////

//router.get("/",wrapAsync(index));


/////   render new listing form route    //////

// router.get("/new",isLoggedIn,renderNewForm);



////// show route /////


//router.get("/:id",wrapAsync(showListing));


//////   create new listing post route   ////////

//router.post("/",isLoggedIn,validateListing,wrapAsync(createListing));


///////  render edit form route   //////

// router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(renderEditForm));



//////   update listing route   ///////



//router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(updateListing));




////   delete  route ////



//router.delete("/:id",isLoggedIn,isOwner,wrapAsync(destroyListing));


