const router = require("express").Router();
const userRoutes = require("./user");
const propertyRoutes = require("./property");
const provinceRoutes = require("./province");
const typeRoutes = require("./type");
const statusRoutes = require("./status");

router.get("/", (req, res) =>
  res.send("Successfully connected to backend server")
);
router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);
router.use("/provinces", provinceRoutes);
router.use("/types", typeRoutes);
router.use("/statuses", statusRoutes);

module.exports = router;
