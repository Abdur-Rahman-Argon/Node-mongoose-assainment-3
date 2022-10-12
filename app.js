const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const jobsRoute = require("./routes/jobs.route");
const user = require("./routes/user.route");

// const stockRoute = require("./routes/stock.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wow My server is run successfully");
});

app.use("/api/v1/jobs", jobsRoute);
// app.use("/api/v1//manager/jobs", managerJobsRoute);
app.use("/api/v1/user", user);
// app.use("/api/v1/user/me", stockRoute);

module.exports = app;
