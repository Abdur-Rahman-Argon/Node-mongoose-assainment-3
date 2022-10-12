const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers");

router.post("/signup", userControllers.signUpUser);

router.post("/login", userControllers.logInUser);
// router.get("/", userControllers.getUser).get("/id", jobsControllers.getJobById);

module.exports = router;
