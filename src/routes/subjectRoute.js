const router = require("express").Router();
const subjectInfo = require("../controllers/subjectControllers");

router.post("/api/v1/upload-subject", subjectInfo.createSubject);

module.exports = router;
