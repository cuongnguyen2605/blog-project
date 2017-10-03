const express = require("express");
const router = express.Router();

const index = require("./index-route");
// const routerArticle = require('./routerArticles');
const routerCredential = require('./credential-route');

router.use("/", index);

// router.use('/articles', routerArticle);
router.use('/admin/credentials', routerCredential);

module.exports = router;