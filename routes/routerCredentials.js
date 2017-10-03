const express = require('express');
const router = require('express').Router();
const credentialsController = require('../http/controllers/credentialController');
const roleCredentialConvertor = require('../http/middlewares/roleCredentialConvertor');

router.get('/', credentialsController.getAllCredentials);

router.get('/up_to_mod/:userId', roleCredentialConvertor.moderatorRoleData, credentialsController.upToModerator);

router.get('/down_to_mem/:userId', roleCredentialConvertor.memberRoleData, credentialsController.downToMember);

router.get('/banning/:userId', roleCredentialConvertor.bannerRoleData, credentialsController.banned);

router.get('/unban/:userId', roleCredentialConvertor.memberRoleData, credentialsController.unbanned);

router.get('/accept/:userId', roleCredentialConvertor.memberRoleData, credentialsController.registerAccepted);

module.exports = router;