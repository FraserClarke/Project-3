const router = require("express").Router();
const userRoutes = require("./user");

router.use("/user", userRoutes); // Matches with /api/user
module.exports = router;