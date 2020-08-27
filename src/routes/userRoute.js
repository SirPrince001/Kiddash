const router = require("express").Router();
const users = require("../controllers/userControllers");

router.post("/api/v1/register", users.registerUser);
router.post("/api/v1/login", users.userLogin);
module.exports = router;
