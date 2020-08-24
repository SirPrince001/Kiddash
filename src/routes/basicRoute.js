const router = require("express").Router();
//const injector = require("../services/injector_request");
const basicController = require("../controllers/basicScienceControllers");

router.post(
  "/api/v1/basic-science",
  (basicController.setEasyBasicScienceQuestion)
);
router.get('/api/v1/get-basic-science' , (basicController.getAllEasyBasicScienceQuestions))
router.get('/api/v1/get-random-basic-science' , (basicController.getRandomResults))

module.exports = router;
