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
    // resume: {
    //   type: String,
    //   validate: [validator.isURL, "Please provide a valid Url"],
    // },

    jobInfo: {
      name: {
        type: String,
        required: [true, " name must be required"],
        trim: true,
        minLength: [5, "Name must less then 5 characters"],
        maxLength: [100, " Name is Too long"],
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
        minLength: [5, "Name must less then 5 characters"],
        maxLength: [100, " Name is Too long"],
      },
      email: {
        type: String,
        lowercase: true,
        required: [true, " Email must be required"],
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
    },
  },
  { timestamps: true }
);

const JobApply = mongoose.model("JobApply", jobApplySchema);
module.exports = JobApply;

// {
//     "email": "user03@gmail.com",
//     "jobInfo":{
//         "name": " React.js Developer",
//         "id":"6346b1d3e8392602e89d4be1"
//     }
//     "candidateInfo": {
//         "name": "USER THREE",
//         "email": "user03@gmail.com",
//         "id":"6346aec6c2fdb92bea509617"
//         },
//     "description":"Wonders Corporation is looking for a front-end react developer to join our growing engineering team in our Manila office. While having strong HTML, CSS, and JavaScript skills are a must."
//   }
