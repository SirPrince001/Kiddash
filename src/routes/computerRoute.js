const router = require("express").Router();
const easyComputer = require("../controllers/computerScienceControllers");
router.post("/api/v1/computer", easyComputer.setEasyComputerQuestions);
router.get("/api/v1/getcomputer", easyComputer.getEasyComputerQuestions);

module.exports = router;
