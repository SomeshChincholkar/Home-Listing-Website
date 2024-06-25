const express = require("express")
const router = express.Router()
const passport = require("passport")
const { saveRedirectedUrl } = require("../middleware.js")

const userController = require("../controllers/users.js")

router.route("/signup").get(userController.renderSignUpForm).post(userController.signup)

router.route("/login").get(userController.renderLoginForm).post(saveRedirectedUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.login)

router.get("/logout", userController.logout)

module.exports = router