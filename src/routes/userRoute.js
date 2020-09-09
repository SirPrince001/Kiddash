const router = require("express").Router();
const users = require("../controllers/userControllers");
const {
  validationResult,
  validate,
} = require("../helperFunction/validateInputs");

router.post(
  "/api/v1/register",
  validationResult(),
  validate,
  users.registerUser
);
router.post("/api/v1/login", validationResult(), validate, users.userLogin);
module.exports = router;
