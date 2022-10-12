const { createJobApplyServices } = require("../services/jobApply.services");

exports.createJobApply = async (req, res, next) => {
  const result = await createJobApplyServices(req.body);
  try {
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "create Job Apply failed",
    });
  }
};
