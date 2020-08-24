const router = require("express").Router();
router.use(require("./basicRoute"));
router.use(require('./computerRoute'))

module.exports = router;
