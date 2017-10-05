module.exports.adminRoleData = (req, res, next) => {
    req.credential = {
        user_id: req.params.userId,
        role: "admin"
    };
    next();
};
module.exports.moderatorRoleData = (req, res, next) => {
    req.credential = {
        user_id: req.params.userId,
        role: "moderator"
    };
    next();
};
module.exports.memberRoleData = (req, res, next) => {
    req.credential = {
        user_id: req.params.userId,
        role: "member"
    };
    next();
};
module.exports.bannerRoleData = (req, res, next) => {
    req.credential = {
        user_id: req.params.userId,
        role: "banner"
    };
    next();
};