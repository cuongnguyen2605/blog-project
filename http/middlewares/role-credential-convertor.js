const Credential = require('../../app/credentials/credential');

exports.adminRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("admin");
    next();
};
exports.moderatorRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("moderator");
    next();
};
exports.memberRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("member");
    next();
};
exports.bannerRoleData = (req, res, next) => {
    req.credential = new Credential();
    req.credential.setUserId(req.params.userId);
    req.credential.setRole("banner");
    next();
};