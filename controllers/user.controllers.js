const { signUpServices } = require("../services/user.services");

exports.signUpUser = async (req, res, next) => {
  try {
    const user = await signUpServices(req.body);

    res.status(200).json({
      status: "success",
      message: "User creates successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't create failed",
    });
  }
};
