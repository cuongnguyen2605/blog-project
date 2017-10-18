const md5 = require('md5');
const Credentials = require('../../app/credentials/password-changing-service');
const PasswordChangingService = require('../../app/credentials/password-changing-service');

let passwordAuthentication = new PasswordChangingService();

module.exports = (req, res, next) => {
    let oldPass = req.body.oldPass;
    let newPass = req.body.newPass;

    passwordAuthentication.getOldPassword(req.params.user_id)
        .then((Password) => {
            // console.log(Password[0].password);
            // console.log(Password);
            // console.log(md5(newPass));
            if (Password[0].password === md5(oldPass)) {
                req.newPassword = md5(newPass);
                next();
            }
            else {
                res.render('change-password',
                    {
                        error: "Old password is not correct",
                        username: req.session.username,
                        role: req.session.role,
                        user_id: req.session.user_id
                    });
            }
        });

};