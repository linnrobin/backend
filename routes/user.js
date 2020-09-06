const router = require("express").Router();
const Controller = require("../controllers/user.js");

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);

module.exports = router;
