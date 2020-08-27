const users = require("../controllers/userControllers");
const router = require("express").Router();

router.post("api/v1/register", users.registerUser);
module.exports = router;
