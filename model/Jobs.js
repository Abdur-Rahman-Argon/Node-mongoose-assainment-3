const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " name must be required"],
      trim: true,
      unique: [true, "name must be Unique"],
      lowercase: true,
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

    // deadline: {},

    // status:  {
    //     type: String,
    //     required: true,
    //     enum: {
    //       values: ["", "out-of-stock", "discontinued"],
    //       message: " Status can't be {VALUE}",
    //     },
    //   },

    description: {
      type: String,
      required: true,
    },

    jobRequirement: {
      type: String,
      required: true,
    },

    hiringManagers: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "HiringManagers",
        required: true,
      },
    },

    Company: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Company",
        required: true,
      },
    },

    Location: String,

    fullAddress: {
      type: String,
    },

    appliedCandidates: [
      {
        type: ObjectId,
        ref: "JobApply",
      },
    ],

    viewCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;
