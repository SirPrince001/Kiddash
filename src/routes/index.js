const router = require("express").Router();
router.use(require("./basicRoute"));
router.use(require("./computerRoute"));
router.use(require("./userRoute"));

module.exports = router;
