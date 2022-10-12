var jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    userId: userInfo._id,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.Token_Secret, {
    expiresIn: "7days",
  });

  return token;
};
