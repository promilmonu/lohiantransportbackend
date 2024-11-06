const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken } = require("../utils/authMiddleware");
exports.registerUserService = async (user) => {
  const { name, email, password, truckRego, mobile, licenceNumber } = user;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const userPayload = new UserModel({
    name,
    email,
    password: hashPassword,
    truckRego,
    mobile,
    licenceNumber,
  });
  if (user) {
    let path = "";
    // user.forEach(function (files, index, arr) {
    path = path + user.path + ",";
    // })
    path = path.substring(0, path.lastIndexOf(","));

    userPayload.profileImage = path;
  }
  const saveUser = await userPayload.save();
  return saveUser;
};

exports.login = async (user) => {
  const { email, password } = user;

  const existingUser = await UserModel.findOne({ email });

  //if user not found
  if (!existingUser) {
    throw new Error("user not found");
  }

  if (!(await bcrypt.compare(password, existingUser.password))) {
    throw new Error("incorrect password");
  }
  const token = generateToken(existingUser);
  return { existingUser, token };
};

exports.refreshTokenService = async (oldToken) => {
  try {
    const decodeToken = verifyToken(oldToken);
    const user = await UserModel.findById(decodeToken.id);
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Invalid Token");
  }
};
