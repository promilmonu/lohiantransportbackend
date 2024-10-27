const { registeredUsers } = require("../controllers/userController");
const upload = require("../utils/upload");

const router = require("express").Router();

router.post("/register", upload.single('profileImage'), registeredUsers);

module.exports = router;
