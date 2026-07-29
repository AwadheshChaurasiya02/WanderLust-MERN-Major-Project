const express=require("express");
const router= express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const { searchCountry } = require("../controllers/search.js");


router.get("/search",wrapAsync(searchCountry));


module.exports=router;