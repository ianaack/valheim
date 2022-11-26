const router = require("express").Router();
const armorRoutes = require("./armor-routes");
const arrowRoutes = require("./arrows-routes");
const foodRoutes = require("./food-routes");
const materialRoutes = require("./materials-routes");
const meadRoutes = require("./meads-routes");
const toolRoutes = require("./tools-routes");
const weaponRoutes = require("./weapons-routes");

router.use("/armor", armorRoutes);
router.use("/arrows", arrowRoutes);
router.use("/food", foodRoutes);
router.use("/materials", materialRoutes);
router.use("/meads", meadRoutes);
router.use("/tools", toolRoutes);
router.use("/weapons", weaponRoutes);

module.exports = router;
