const router = require("express").Router();
const bTech = require("../controllers/basicTechnologyControllers");

router.post("/api/v1/create-basic-tech", bTech.setBasicTechnologyQuestion);

module.exports = router;
