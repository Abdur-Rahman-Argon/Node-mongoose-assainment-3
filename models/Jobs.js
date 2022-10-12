const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");

const jobsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " name must be required"],
      trim: true,
      minLength: [5, "Name must less then 5 characters"],
      maxLength: [50, " Name is Too long"],
    },

    jobType: {
      type: String,
      required: true,
      enum: {
        values: [
          "remote",
          "on-site",
          "hybrid",
          "Full-time",
          "Part-time",
          "Internship",
        ],
        message: " Job type can't be {VALUE}",
      },
    },

    salary: {
      type: Number,
      required: true,
      min: [0, " salary cannot be negative"],
    },

    deadline: {
      type: Date,
    },

    status: {
      type: String,
      enum: {
        values: ["active", "expired", "closed"],
        message: " Status can't be {VALUE}",
      },
      default: "active",
    },

    description: {
      type: String,
    },

    jobRequirement: {
      type: String,
      // required: [true, " jobRequirement must be required"],
    },

    hiringManagers: {
      name: {
        type: String,
        required: [true, " name must be required"],
      },
      email: {
        type: String,
        lowercase: true,
        required: [true, " email must be required"],
        validate: [validator.isEmail, "please provide a valid Email"],
      },
      id: {
        type: ObjectId,
        ref: "Users",
        required: true,
      },
    },

    Company: {
      name: {
        type: String,
        // required: true,
      },
      id: {
        type: ObjectId,
        ref: "Company",
        // required: true,
      },
    },

    location: {
      type: String,
      required: [true, " Job Location must be required"],
    },

    fullAddress: {
      type: String,
    },

    appliedCandidates: [
      {
        type: ObjectId,
        ref: "JobApply",
      },
    ],

    views: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;
