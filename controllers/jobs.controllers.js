const {
  createJobsServices,
  getJobsServices,
  getJobByIdServices,
  updateJobByIdServices,
} = require("../services/jobs.services");

exports.createJobs = async (req, res, next) => {
  try {
    const result = await createJobsServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Jobs creates successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't create the Job",
    });
  }
};

exports.getJobs = async (req, res, next) => {
  try {
    const queries = {};

    const filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    //sortby
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    // page & limit
    if (req.query.page) {
      // console.log(req.query);
      const { page = 1, limit = 4 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const jobs = await getJobsServices(filters, queries);

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

exports.getJobById = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const job = await getJobByIdServices(id);

    if (!job) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find any Job with this is ",
      });
    }

    res.status(200).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get  any Job",
    });
  }
};

exports.updateJobById = async (req, res, next) => {
  const { id } = reg.params;
  try {
    const result = await updateJobByIdServices(id, req.body);

    if (!result.nModified) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't update the Job with this is Id",
      });
    }

    res.status(200).json({
      status: "success",
      message: " this Job updated  successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't update the Job with this is Id",
    });
  }
};
