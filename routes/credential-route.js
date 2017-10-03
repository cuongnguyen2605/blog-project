const express = require('express');
const router = require('express').Router();
const credentialsController = require('../http/controllers/credentialController');
const roleCredentialConverter = require('../http/middlewares/roleCredentialConverter');
const adminRequireMiddleware = require('../http/middlewares/adminRequireMiddleware');

router.get('/', credentialsController.getAllCredentials);

router.get('/up_to_mod/:userId', adminRequireMiddleware, roleCredentialConverter.moderatorRoleData, credentialsController.statusChanging);

router.get('/down_to_mem/:userId', adminRequireMiddleware, roleCredentialConverter.memberRoleData, credentialsController.statusChanging);

router.get('/banning/:userId', adminRequireMiddleware, roleCredentialConverter.bannerRoleData, credentialsController.statusChanging);

router.get('/unban/:userId', adminRequireMiddleware, roleCredentialConverter.memberRoleData, credentialsController.statusChanging);

router.get('/accept/:userId', adminRequireMiddleware, roleCredentialConverter.memberRoleData, credentialsController.statusChanging);

module.exports = router;