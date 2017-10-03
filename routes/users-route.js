const express = require("express");
const router = express.Router();

router.get("/users", function(req, res, next) {
    res.send("User");
});

module.exports = router;
