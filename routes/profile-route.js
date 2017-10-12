const express = require('express');
const router = express.Router();

const ProfileMiddleware = require('../http/middlewares/profile-middleware');
const ProfileController = require('../http/controllers/profile-controller');

router.get('/:username', ProfileController.getProfile);

router.post('/:username', ProfileMiddleware, ProfileController.updateProfile);

module.exports = router;