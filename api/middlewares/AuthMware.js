const validateToken = (req, res, next) => {
  const token = req.header("accessToken");

  if (!token) {
    return res.status(401).json({ message: "Not login" });
  }
  try {
    const decoded = jwt.verify(token, "secretdummykey");
    req.user = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { validateToken };
