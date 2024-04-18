const jwt = require("jsonwebtoken");
require("dotenv").config();
const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  //token = token.replace(/^Bearer\s/, "");

  token = token.replace("Bearer ", "");
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;
