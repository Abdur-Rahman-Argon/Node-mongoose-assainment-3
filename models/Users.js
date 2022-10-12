const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "provide a valid email"],
      trim: true,
      unique: true,
      lowercase: true,
      require: [true, " Email address is required"],
    },
    password: {
      type: String,
      require: [true, " Please give your password"],
      validate: (value) =>
        validator.isStrongPassword(value, {
          minlength: 8,
          minSymbols: 1,
        }),
      message: "password {VALUE} is not Strong",
    },
    confirmPassword: {
      type: String,
      require: [true, " Please confirm Your Password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Don't matched passqords",
      },
    },

    role: {
      type: String,
      enum: ["candidate", "hiring-manager", "admin"],
      default: "candidate",
    },
    firstName: {
      type: String,
      require: [true, " Please Provide your Name"],
      trim: true,
      minLength: [5, "Name Must be length 5 characters"],
      maxLength: [5, "Name Too Large"],
    },
    lastName: {
      type: String,
      require: [true, " Please Provide your Name"],
      trim: true,
      minLength: [5, "Name Must be length 5 characters"],
      maxLength: [5, "Name Too Large"],
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        " Please provide correct mobile number",
      ],
    },
    location: String,
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid Url"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
