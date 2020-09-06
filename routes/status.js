const router = require("express").Router();
const Controller = require("../controllers/status.js");

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);

module.exports = router;
