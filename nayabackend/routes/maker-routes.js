let router = require('express').Router();
var makerController = require('../controller/makerController');

router.post("/",makerController.new);
router.get("/",makerController.index);

// Export API routes
module.exports = router;