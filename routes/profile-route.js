const express = require('express');
const router = express.Router();

// const ProfileMiddleware = require('../http/middlewares/profile-middleware');
const ProfileController = require('../http/controllers/profile-controller');

router.get('/:profile_id', ProfileController.getProfile);

router.put('/:profile_id', ProfileController.updateProfile);

module.exports = router;