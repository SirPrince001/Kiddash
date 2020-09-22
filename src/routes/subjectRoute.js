const router = require("express").Router();
const parser = require('../helperFunction/cloud')
const subjectInfo = require("../controllers/subjectControllers");


router.post("/api/v1/upload-subject", parser().single('image'), subjectInfo.createSubject);
router.get("/api/v1/get-uploaded-subject" , subjectInfo.getSubject)

module.exports = router;
