const PasswordChangingService = require('../../app/credentials/password-changing-service');

const passwordChangingService = new PasswordChangingService();

changePassword = (req, res, next) => {
    passwordChangingService.changePassword(req.params.user_id, req.newPassword)
        .then(() => {
            res.redirect('/profile/change-password/' + req.session.username);
        })
        .catch(next)
};

exports.changePassword = changePassword;