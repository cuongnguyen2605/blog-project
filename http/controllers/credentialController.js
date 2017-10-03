const userStatusChanger = require('../../app/credentials/UserStatusChangingService');

let UserStatusChangingService = new userStatusChanger();

module.exports.getAllCredentials = function (req, res, next) {
    UserStatusChangingService.getAllCredentials()
        .then((credentials) => {
            res.render(__dirname + '/../../views/CredentialList.ejs', {credentials: credentials})
        })
        .catch(next);
}

module.exports.registerAccepted = function (req, res) {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials');
        });
}

module.exports.upToModerator = function (req, res) {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials')
        });
}

module.exports.downToMember = function (req, res) {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials')
        });
}

module.exports.banned = function (req, res) {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials')
        });
}

module.exports.unbanned = function (req, res) {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials')
        });
}

