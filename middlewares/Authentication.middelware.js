const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "flopkart", (err, decoded) => {
      if (decoded) {
        const userID = decoded.userID;
        // console.log(decoded);
        req.body.authorID = userID;
        next();
      } else {
        res
          .status(500)
          .json({ message: "Please login  first", status: "Failed" });
      }
    });
  } else {
    res.status(500).json({ message: "Please login  first", status: "Failed" });
  }
};
module.exports = {
  authenticate,
};
