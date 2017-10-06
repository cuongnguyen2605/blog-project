const Credential = require('../../app/credentials/credential');

module.exports.adminRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("admin");
    next();
};
module.exports.moderatorRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("moderator");
    next();
};
module.exports.memberRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("member");
    next();
};
module.exports.bannerRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("banner");
    next();
};