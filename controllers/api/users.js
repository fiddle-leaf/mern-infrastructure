const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/** -- Helper Functions -- **/
function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
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

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.status(200).json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken,
};
