const express = require('express');
const router = require('express').Router();
const CheckAliveSession = require('../http/middlewares/check-alive-session');
const getAllCredentials = require('../http/controllers/credential-controller').getAllCredentials;
const setModeratorRole = require('../http/controllers/credential-controller').setModeratorRole;
const setMemberRole = require('../http/controllers/credential-controller').setMemberRole;
const setBannerRole = require('../http/controllers/credential-controller').setBannerRole;

const adminRequireMiddleware = require('../http/middlewares/admin-require-middleware');

router.get('/',CheckAliveSession, adminRequireMiddleware, getAllCredentials);

router.get('/up_to_mod/:userId', adminRequireMiddleware, setModeratorRole);

router.get('/down_to_mem/:userId', adminRequireMiddleware, setMemberRole);

router.get('/banning/:userId', adminRequireMiddleware, setBannerRole);

router.get('/unban/:userId', adminRequireMiddleware, setMemberRole);

module.exports = router;