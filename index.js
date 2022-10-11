const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

mongoose.connect(process.env.MongoDB_URL).then(() => {
  "MongoDB Connect Successfully";
});

// server
const port = process.env.PORT || 5000;

// app run port
app.listen(port, () => {
  console.log("server connected port On " + port);
});
