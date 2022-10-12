const express = require("express");
const router = express.Router();
const jobsControllers = require("../controllers/jobs.controllers");

router.post("/", jobsControllers.createJobs).get("/", jobsControllers.getJobs);
router
  .patch("/id", jobsControllers.updateJobById)
  .get("/id", jobsControllers.getJobById)
  .post("/:id/apply");

module.exports = router;
