const { registeredUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", registeredUsers);

module.exports = router;
