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

exports.setMemberRole = (req, res) => {
    return UserStatusChangingService.changeStatusUser("member", req.params.userId)
        .then(() => {
            res.redirect('/admin/credentials');
        });
};

exports.setModeratorRole = (req, res) => {
    return UserStatusChangingService.changeStatusUser("moderator", req.params.userId)
        .then(() => {
            res.redirect('/admin/credentials');
        });
};

exports.setBannerRole = (req, res) => {
    return UserStatusChangingService.changeStatusUser("banner", req.params.userId)
        .then(() => {
            res.redirect('/admin/credentials');
        });
};