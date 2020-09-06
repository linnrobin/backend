const router = require("express").Router();
const Controller = require("../controllers/property.js");

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);
router.get("/:province/:type/:status", Controller.findSome);

module.exports = router;
