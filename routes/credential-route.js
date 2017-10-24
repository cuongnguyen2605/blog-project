const express = require('express');
const router = require('express').Router();
const CheckAliveSession = require('../http/middlewares/check-alive-session');
const getAllCredentials = require('../http/controllers/credential-controller').getAllCredentials;
const statusChangingCredentials = require('../http/controllers/credential-controller').statusChanging;

const adminRequireMiddleware = require('../http/middlewares/admin-require-middleware');
memberRoleData = require('../http/middlewares/role-credential-convertor').memberRoleData;
moderatorRoleData = require('../http/middlewares/role-credential-convertor').moderatorRoleData;
bannerRoleData = require('../http/middlewares/role-credential-convertor').bannerRoleData;

router.get('/',CheckAliveSession, adminRequireMiddleware, getAllCredentials);

router.get('/up_to_mod/:userId', adminRequireMiddleware, moderatorRoleData, statusChangingCredentials);

router.get('/down_to_mem/:userId', adminRequireMiddleware, memberRoleData, statusChangingCredentials);

router.get('/banning/:userId', adminRequireMiddleware, bannerRoleData, statusChangingCredentials);

router.get('/unban/:userId', adminRequireMiddleware, memberRoleData, statusChangingCredentials);

module.exports = router;