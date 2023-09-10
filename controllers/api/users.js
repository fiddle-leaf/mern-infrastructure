const User = require("../../models/User");
const jwt = require("jsonwebtoken");

/** -- Helper Functions -- **/
function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function create(req, res) {
  try {
    // Add user to database
    const user = await User.create(req.body);
    //token is a string
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
  create,
};
