const {
  registeredUsers,
  loginUserController,
  refreshTokenController,
} = require("../controllers/userController");

const upload = require("../utils/upload");

const router = require("express").Router();

router.post("/register", upload.single("profileImage"), registeredUsers);
router.post("/login", loginUserController);
router.post("/refresh-token", refreshTokenController);
module.exports = router;
