const userStatusChanger = require('../../app/credentials/user-status-changing-service');

let UserStatusChangingService = new userStatusChanger();

exports.getAllCredentials = (req, res, next) => {
    UserStatusChangingService.getAllCredentials()
        .then((credentials) => {
            res.render('credentials-list', {
                credentials: credentials
                , username: req.session.username
                , role: req.session.role
                , user_id: req.session.user_id
            })
        })
        .catch(next);
};

exports.statusChanging = (req, res) => {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials');
        });
};