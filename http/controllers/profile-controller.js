const mysqlConnection = require('../../database/mysql-connection');
const ProfileService = require('../../app/profiles/profile-service');

const profileService = new ProfileService(mysqlConnection);

getProfile = (req, res, next) => {
    profileService.getProfile(req.params.username)
        .then((profile) => {
            res.render('profile', {
                message: req.message || '',
                type: req.type || '',
                profile: profile,
                username: req.session.username,
                role: req.session.role,
                user_id: req.session.user_id
            });
        })
        .catch(next)
};

updateProfile = (req, res, next) => {
    profileService.updateProfile(req.profile)
        .then(() => {
        req.message = "bla bla";
        req.type = "gi day";
            res.redirect('/profile/' + req.session.username);
        })
        .catch(next)
};

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;