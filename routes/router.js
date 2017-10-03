const express = require("express");
const router = express.Router();

const index = require("./index-route");
const user = require("./users-route");

router.get("/", index);
router.get("/", user);

module.exports = router;