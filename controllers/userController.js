const userService = require("../services/userService");
exports.registeredUsers = async (req, res) => {
  try {
    const userData = { ...req.file, ...req.body };
    const registerUser = await userService.registerUserService(userData);
    //only  send response data without password here
    const { password, ...data } = registerUser.toJSON();
    res.status(201).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUserController = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    res.send({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.refreshTokenController = async (req, res) => {
  try {
    const { token } = req.body;
    const newToken = await userService.refreshTokenService(token);
    res.send({ newToken: newToken, status: "successs" });
  } catch (error) {
    res.status(500).json({ error: "Invalid Token" });
  }
};
