const { translateText } = require("../controller/translateText.js")

const express = require("express");
const router = express.Router();

router.route("/api/translate").post(translateText);

module.exports = router;