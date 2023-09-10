const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //check for token being sent in header or query parameter
  let token = req.get("Authorization") || req.query.token;

  // if token is present
  if (token) {
    //remove 'Bearer'
    token = token.replace("Bearer ", "");

    //check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      // if valid, decoded is token's entire payload
      // if invalid, set error
      req.user = err ? null : decoded.user;
      req.exp = err ? null : new Date(decoded.exp * 1000);
      return next();
    });
  } else {
    //no token was sent
    req.user = null;
    return next();
  }
};
