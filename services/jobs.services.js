const Jobs = require("./../models/Jobs");
const JobApply = require("./../models/JobApply");

exports.createJobsServices = async (data) => {
  const result = await Jobs.create(data);
  return result;
};

exports.appliedJob = async (email) => {
  const jobs = await JobApply.findOne({ email });
  return jobs;
};

exports.getJobsServices = async (filter, queries) => {
  const jobs = await Jobs.find(filter)
    .sort(queries.sortBy)
    .skip(queries.skip)
    .limit(queries.limit);

  return jobs;
};

exports.getJobByIdServices = async (id) => {
  const jobs = await Jobs.findById({ _id: id }).populate("hiringManagers.id");
  const view = await Jobs.updateOne({ _id: id }, { $inc: { views: 1 } });
  return jobs;
};

exports.getManagersJobsServices = async (email, id) => {
  //   const jobs = await Jobs.find({ email, id });
  const jobs = await Jobs.find({ "hiringManagers.email": email });
  return jobs;
};

exports.getJobByIdManager = async (id) => {
  const jobs = await Jobs.findById({ _id: id }).populate("appliedCandidates");
  return jobs;
};

exports.updateJobByIdServices = async (id, data) => {
  const result = await Jobs.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
