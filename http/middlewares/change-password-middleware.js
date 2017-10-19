const md5 = require('md5');
const PasswordChangingService = require('../../app/credentials/password-changing-service');

let passwordAuthentication = new PasswordChangingService();

module.exports = (req, res, next) => {
    let oldPass = req.body.oldPass;
    let newPass = req.body.newPass;

    passwordAuthentication.getOldPassword(req.params.user_id)
        .then((Password) => {
            if (Password[0].password === md5(oldPass)) {
                req.newPassword = md5(newPass);
                res.render('change-password',
                    {
                        message: "Your password was change!",
                        status: 'success',
                        username: req.session.username,
                        role: req.session.role,
                        user_id: req.session.user_id
                    });
                next();
            }
            else {
                res.render('change-password',
                    {
                        message: "Old password is not correct!",
                        status: 'warning',
                        username: req.session.username,
                        role: req.session.role,
                        user_id: req.session.user_id
                    });
            }
        });

};