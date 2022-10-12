const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const jobsRoute = require("./routes/jobs.route");
const managerJobsRoute = require("./routes/managerJobs.route");
const user = require("./routes/user.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wow My server is run successfully");
});

// candidates Routes
app.use("/api/v1/jobs", jobsRoute);

// Hiring manager Routes
app.use("/api/v1/manager/jobs", managerJobsRoute);

//  Auth Route
app.use("/api/v1/user", user);

// app.use("/api/v1/admin", adminRoute);

module.exports = app;
