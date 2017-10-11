const mysqlConnection = require('../../database/mysql-connection');
const ProfileService = require('../../app/profiles/profile-service');

const profileService = new ProfileService(mysqlConnection);

getProfile = (req, res, next) => {
    profileService.getProfile(req.params.profile_id)
        .then((profile) => {
            res.render('profile', {
                profile: profile
            })
        })
        .catch(next)
}

updateProfile = (req, res, next) => {
    profileService.updateProfile(req.profile)
        .then((profile) => {
            res.render('profile', {
                profile: profile
            })
            res.redirect('/profile')
        })
        .catch(next)
}

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;