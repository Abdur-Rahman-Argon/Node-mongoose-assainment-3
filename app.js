const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// const productRoute = require("./routes/product.route");
// const brandRoute = require("./routes/brand.route");

// const stockRoute = require("./routes/stock.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wow My server is run successfully");
});

// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/brand", brandRoute);

// app.use("/api/v1/stock", stockRoute);

module.exports = app;
