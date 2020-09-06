const router = require("express").Router();
const Controller = require("../controllers/property.js");

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);

module.exports = router;
