const {
  signUpServices,
  findUserByEmail,
} = require("../services/user.services");
const { generateToken } = require("../utils/token");

exports.signUpUser = async (req, res, next) => {
  try {
    // console.log(req.body);
    const user = await signUpServices(req.body);

    res.status(200).json({
      status: "success",
      message: "User creates successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "create user failed",
    });
  }
};

exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please Provide Your credentials",
      });
    }

    const user = await findUserByEmail(email);
    // console.log(user);
    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found , please create a account",
      });
    }

    // const isPasswordValid = user.comparePassword(password, user.password);

    if (password === user.password) {
      const token = generateToken(user);

      const { password: pwd, ...others } = user.toObject();

      res.status(200).json({
        status: "success",
        message: "User logIn successfully",
        data: {
          others,
          token,
        },
      });
    } else {
      return res.status(401).json({
        status: "fail",
        error: "password is not correct",
      });
    }

    // if (user.status != "active") {
    //   return res.status(401).json({
    //     status: "fail",
    //     error: "user isn't active",
    //   });
    // }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: "LogIn User failed",
    });
  }
};

// get me api controller
exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req?.user?.email);
    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "User logIn successfully",
      data: {
        user: others,
      },
    });
    // res.json(req.user);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};
