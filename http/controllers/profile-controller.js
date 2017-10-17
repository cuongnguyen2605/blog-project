const mysqlConnection = require('../../database/mysql-connection');
const ProfileService = require('../../app/profiles/profile-service');

const profileService = new ProfileService(mysqlConnection);

getProfile = (req, res, next) => {
    profileService.getProfile(req.params.username)
        .then((profile) => {
            res.render('profile', {
                profile: profile,
                username: req.session.username,
                role: req.session.role
            });
        })
        .catch(next)
};

updateProfile = (req, res, next) => {
    profileService.updateProfile(req.profile)
        .then(() => {
            res.redirect('/profile/' + req.session.username);
        })
        .catch(next)
};

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;