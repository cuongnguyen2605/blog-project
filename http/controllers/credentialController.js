const userStatusChanger = require('../../app/credentials/UserStatusChangingService');

let UserStatusChangingService = new userStatusChanger();

module.exports.getAllCredentials = (req, res, next) => {
    UserStatusChangingService.getAllCredentials()
        .then((credentials) => {
            res.render(__dirname + '/../../views/CredentialList.ejs', {credentials: credentials})
        })
        .catch(next);
}

module.exports.statusChanging = (req, res) => {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials');
        });
}