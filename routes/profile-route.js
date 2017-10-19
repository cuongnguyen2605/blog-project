const express = require('express');
const router = express.Router();

const profileMiddleware = require('../http/middlewares/profile-middleware');
const changePasswordMiddleware = require('../http/middlewares/change-password-middleware');

const getMyProfile = require('../http/controllers/profile-controller').getProfile;
const updateProfile = require('../http/controllers/profile-controller').updateProfile;
const changePassword = require('../http/controllers/change-password-controller').changePassword;

router.get('/:username', getMyProfile);

router.post('/:username', profileMiddleware, updateProfile);

router.get('/change-password/:user_id', (req, res) => {
    res.render('change-password',
        {
            message: "",
            username: req.session.username,
            role: req.session.role,
            user_id: req.session.user_id
        });
});

router.post('/change-password/:user_id', changePasswordMiddleware, changePassword);

module.exports = router;