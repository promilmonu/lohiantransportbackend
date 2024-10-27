const userService = require("../services/userService");
exports.registeredUsers = async (req, res) => {
  try {
    
    const userData = { ...req.file, ...req.body };
    const registerUser = await userService.registerUserService(userData);
//only  send response data without password here
    const {password, ...data}= registerUser.toJSON()
    res.status(201).json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
