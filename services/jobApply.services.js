const JobApply = require("../models/JobApply");

exports.createJobApplyServices = async (data) => {
  const result = await JobApply.create(data);
  return result;
};
