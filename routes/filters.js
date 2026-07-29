const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const { trendingListings, roomsListings, iconicCitiesListings, mountainsListings, castlesListings, amazingPoolsListings, CampingListings, farmsListings, arcticListings, domesListings, boatsListings } = require("../controllers/filters");
const router= express.Router();

router.get("/trending",wrapAsync(trendingListings));
router.get("/rooms",wrapAsync(roomsListings));
router.get("/iconicCities",wrapAsync(iconicCitiesListings));
router.get("/mountains",wrapAsync(mountainsListings));
router.get("/castles",wrapAsync(castlesListings));
router.get("/amazingPools",wrapAsync(amazingPoolsListings));
router.get("/camping",wrapAsync(CampingListings));
router.get("/farms",wrapAsync(farmsListings));
router.get("/arctic",wrapAsync(arcticListings));
router.get("/domes",wrapAsync(domesListings));
router.get("/boats",wrapAsync(boatsListings));

module.exports = router;