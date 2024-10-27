const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");
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
    let path = ''
    // user.forEach(function (files, index, arr) {
        path = path + user.path + ','
    // })
    path = path.substring(0, path.lastIndexOf(","))
    
    userPayload.profileImage = path
}
  const saveUser = await userPayload.save();
  return saveUser;
};
