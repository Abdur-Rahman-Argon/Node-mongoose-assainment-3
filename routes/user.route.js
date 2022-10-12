const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers");
const verifyToken = require("../middleware/verifyToken");

router.post("/signup", userControllers.signUpUser);

router.post("/login", userControllers.logInUser);

router.post("/me", verifyToken, userControllers.getMe);

module.exports = router;
