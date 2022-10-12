const { createJobApplyServices } = require("../services/jobApply.services");
const { getJobByIdServices, appliedJob } = require("../services/Jobs.services");

exports.createJobApply = async (req, res, next) => {
  //   const { id } = req.params;
  //   const userEmail = req?.user?.email;
  //   const thisJob = await appliedJob(userEmail);

  //   //   const alreadyApplied = thisJob.appliedCandidates?.find((i) => i == userId);
  //   //   console.log(alreadyApplied);

  //   if (thisJob?.jobInfo?.id === id) {
  //     res.status(403).json({
  //       status: "fail",
  //       error: "Already Applied",
  //     });
  //   }

  const result = await createJobApplyServices(req.body);
  res.status(200).json({
    status: "success",
    message: "Job Applied successfully",
  });
  try {
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "create Job Apply failed",
    });
  }
};
