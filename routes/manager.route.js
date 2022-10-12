const express = require("express");
const router = express.Router();
const jobsControllers = require("../controllers/jobs.controllers");

router.get("/", jobsControllers.getJobs).get("/id", jobsControllers.getJobById);
