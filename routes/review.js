const express = require("express")
const router = express.Router({mergeParams: true})

const { isLoggedIn, isReviewAuthor,validateReview } = require("../middleware.js")
  
const reviewController = require("../controllers/reviews.js")

router.post("/", validateReview, isLoggedIn, reviewController.createReview)
 
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, reviewController.destroyReview)
 
module.exports = router