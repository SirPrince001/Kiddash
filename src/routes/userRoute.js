const router = require("express").Router();
const users = require("../controllers/userControllers");
const {
    validateUserInput,
  validate,
} = require("../helperFunction/validateInputs");

router.post(
  "/api/v1/register",
  validateUserInput(),
  validate,
  users.registerUser
);
router.post("/api/v1/login", validateUserInput(), validate, users.userLogin);
module.exports = router;
