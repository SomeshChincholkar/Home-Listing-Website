const express = require("express")
const router = express.Router()
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

const wrapAsync = require("../utils/wrapAsync.js")

const listingController = require("../controllers/listings.js")

router
.route("/")
.get(listingController.index)
.post(isLoggedIn, validateListing, wrapAsync(listingController.createListing))

router.get("/new", isLoggedIn, listingController.rendernewForm);
  
router.route("/:id").get(listingController.showListing).put(isLoggedIn, isOwner, listingController.updateListing).delete(isLoggedIn, isOwner, listingController.destroyListing);

router.get("/:id/edit", isLoggedIn,isOwner, listingController.renderEditForm);

module.exports = router;