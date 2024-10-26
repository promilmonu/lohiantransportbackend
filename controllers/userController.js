const userService = require("../services/userService");
exports.registeredUsers = async (req, res) => {
  try {
    userData = req.body;
    const registerUser = await userService.registerUserService(userData);

    res.status(201).json({ data: registerUser, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
