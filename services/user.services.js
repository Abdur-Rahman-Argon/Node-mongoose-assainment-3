const Users = require("../models/Users");

exports.signUpServices = async (userInfo) => {
  const result = await Users.create(userInfo);
  return result;
};
