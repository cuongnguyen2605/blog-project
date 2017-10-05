const userStatusChanger = require('../../app/credentials/user-status-changing-service');

let UserStatusChangingService = new userStatusChanger();

module.exports.getAllCredentials = (req, res, next) => {
    UserStatusChangingService.getAllCredentials()
        .then((credentials) => {
            res.render(__dirname + '/../../views/credentials-list.ejs', {credentials: credentials
                                                                        ,username: req.session.username
                                                                        , role: req.session.role});
        })
        .catch(next);
}

module.exports.statusChanging = (req, res) => {
    return UserStatusChangingService.changeStatusUser(req.credential.role, req.credential.user_id)
        .then(() => {
            res.redirect('/admin/credentials');
        });
}