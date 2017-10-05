const express = require("express");
const router = express.Router();
const AuthRouter = require('./auth-route');
const routerArticle = require('./article-route');
const routerCredential = require('./credential-route');
const index = require("./index-route");
const routeProfile = require('profile-route');

router.use("/", index);
router.use('/',AuthRouter);
router.use('/articles', routerArticle);
router.use('/admin/credentials', routerCredential);
router.use('/profile',routeProfile);

module.exports = router;
module.exports = router;