const router = require("express").Router();
router.use(require("./basicRoute"));
router.use(require("./computerRoute"));
router.use(require("./userRoute"));
router.use(require("./subjectRoute"));
router.use(require("./bTechRoute"));
module.exports = router;
