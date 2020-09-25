const router = require("express").Router();
const bTech = require("../controllers/basicTechnologyControllers");

router.post("/api/v1/create-basic-tech", bTech.setBasicTechnologyQuestion);
router.get("/api/v1/get-basic-tech", bTech.getBasicTechnologyQuestion);

module.exports = router;
