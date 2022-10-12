var jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.Token_Secret, {
    expireIn: "7days",
  });
};
