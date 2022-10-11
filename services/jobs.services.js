const Jobs = require("./../models/Jobs");

exports.createJobsServices = async (data) => {
  const result = await Jobs.create(data);
  return result;
};

exports.getJobsServices = async () => {
  const jobs = await Jobs.find({});
  return jobs;
};

exports.getJobByIdServices = async (id) => {
  const jobs = await Jobs.findOne({ _id: id });
  return jobs;
};

exports.updateJobByIdServices = async (id, data) => {
  const result = await Jobs.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
