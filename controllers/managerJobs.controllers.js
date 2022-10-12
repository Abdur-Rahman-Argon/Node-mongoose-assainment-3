const {
  getManagersJobsServices,
  getJobByIdManager,
} = require("../services/Jobs.services");

exports.getManagerAllJobs = async (req, res, next) => {
  try {
    const managerId = req?.user?.userId;
    const managerEmail = req?.user?.email;
    // console.log(managerId);
    const jobs = await getManagersJobsServices(managerEmail, managerId);

    res.status(200).json({
      status: "success",
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get  any Job",
    });
  }
};

exports.getManagerJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const jobs = await getJobByIdManager(id);

    res.status(200).json({
      status: "success",
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get  any Job",
    });
  }
};
