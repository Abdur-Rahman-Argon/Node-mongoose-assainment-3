const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Company Name is required"],
      maxLength: 50,
      unique: true,
    },

    description: String,

    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid Email"],
    },

    website: {
      type: String,
      validate: [validator.isURL, "Please provide a valid Url"],
    },

    Location: String,
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brand", companySchema);
module.exports = Brand;
