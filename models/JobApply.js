const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");

const jobApplySchema = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, " Email is must be required fr apply"],
      validate: [validator.isEmail, "Please provide a valid Email"],
    },
    resume: {
      type: String,
      validate: [validator.isURL, "Please provide a valid Url"],
    },

    jobInfo: {
      name: {
        type: String,
        required: [true, " name must be required"],
        trim: true,
        unique: [true, "name must be Unique"],
        lowercase: true,
        minLength: [5, "Name must less then 5 characters"],
        maxLength: [50, " Name is Too long"],
      },
      id: {
        type: ObjectId,
        ref: "Jobs",
        required: true,
      },
    },

    candidateInfo: {
      name: {
        type: String,
        required: [true, " name must be required"],
        trim: true,
        unique: [true, "name must be Unique"],
        lowercase: true,
        minLength: [5, "Name must less then 5 characters"],
        maxLength: [50, " Name is Too long"],
      },
      email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid Email"],
      },
      id: {
        type: ObjectId,
        ref: "Users",
        required: true,
      },
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JobApply = mongoose.model("JobApply", jobApplySchema);
module.exports = JobApply;
