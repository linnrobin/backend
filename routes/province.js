const router = require("express").Router();
const Controller = require("../controllers/province.js");

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);

module.exports = router;
