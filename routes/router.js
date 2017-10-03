const express = require("express");
const router = express.Router();

const index = require("./index-route");

router.use("/", index);

module.exports = router;