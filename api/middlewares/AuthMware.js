const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("accessToken");
  console.log("*************** token verifiying ****************");
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Not login" });
  }
  try {
    const validToken = verify(token, "secretdummykey");
    console.log(validToken.name);
    req.user = validToken.userId;
    req.email = validToken.email;
    req.name = validToken.name;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { validateToken };
