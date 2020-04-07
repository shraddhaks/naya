let router = require('express').Router();
var designerController = require('../controller/designerController');

router.post("/",designerController.new);
router.get("/",designerController.index);

// Export API routes
module.exports = router;