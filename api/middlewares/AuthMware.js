const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("accessToken");
  console.log("token from req.header:", token);
  if (!token) {
    return res.status(401).json({ message: "Not login!!!!!!!!!!!!!!!!!!!!!" });
  }
  try {
    const validToken = verify(token, "secretdummykey");

    req.user = validToken.userId;
    req.email = validToken.email;
    req.name = validToken.name;

    if (validToken) {
      console.log("valid");
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { validateToken };
