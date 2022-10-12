exports.getManagerAllJobs = async (req, res, next) => {
  try {
    const jobs = await getJobsServices();

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
    const jobs = await getJobsServices();

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
