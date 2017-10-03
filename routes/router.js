const express = require("express");
const router = express.Router();

const index = require("./index-route");
router.get("/", index);

module.exports = router;