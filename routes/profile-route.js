const express = require('express');
const router = express.Router();

const ProfileController = require('../http/controllers/profile-controller');

router.get('/profile', ProfileController.getProfile);

router.put('/update-profile', ProfileController.updateProfile);

module.exports = router;