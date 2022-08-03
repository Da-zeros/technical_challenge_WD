const router = require("express").Router();
const controller = require("../controllers/controller")


router.get("/phones", controller.allPhones)
router.get("/phones/:id", controller.phone) 


module.exports = router;