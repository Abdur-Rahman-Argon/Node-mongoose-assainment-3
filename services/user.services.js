const Users = require("../models/Users");

exports.signUpServices = async (userInfo) => {
  const result = await Users.create(userInfo);
  return result;
};

exports.findUserByEmail = async (email) => {
  const user = await Users.findOne(email);
  return user;
};
