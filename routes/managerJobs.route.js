const express = require("express");
const managerJobsControllers = require("../controllers/managerJobs.controllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router
  .get("/", verifyToken, managerJobsControllers.getManagerAllJobs)
  .get("/:id", verifyToken, managerJobsControllers.getManagerJobById);
//   .patch("/id", verifyToken,  jobsControllers.updateJobById);

module.exports = router;
