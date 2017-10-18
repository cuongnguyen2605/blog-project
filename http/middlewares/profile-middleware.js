const Profile = require('../../app/profiles/profile');

module.exports = function (req, res, next) {
    let profile = new Profile();
    profile.setFullname(req.body.fullname);
    profile.setUsername(req.params.username);
    profile.setEmail(req.body.email);
    profile.setPhone(req.body.phone);
    profile.setAddress(req.body.address);
    req.profile = profile;
    next();
};