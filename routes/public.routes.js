const express = require("express");
const router = express.Router();
const path = require("path");

// Serve static files under the "/public" route
router.use("/", express.static(path.join(process.cwd(), "public")));

module.exports = router;
