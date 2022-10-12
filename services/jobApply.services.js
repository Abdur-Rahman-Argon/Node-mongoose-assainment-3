const JobApply = require("../models/JobApply");
const Jobs = require("./../models/Jobs");

exports.createJobApplyServices = async (data) => {
  const jobApplied = await JobApply.create(data);
  const { _id: AppliedId, jobInfo } = jobApplied;

  // apply update to  job
  const res = await Jobs.updateOne(
    { _id: jobInfo.id },
    { $push: { appliedCandidates: AppliedId } }
  );
  //   console.log(res);

  return jobApplied;
};
