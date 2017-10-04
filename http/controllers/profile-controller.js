const mysqlConnection = require('../../database/mysql-connection');
const ProfileService = require('../../app/profiles/profile-service');

const profileService = new ProfileService(mysqlConnection);

getProfile = (req, res, next) => {
    profileService.getProfile(req.params.id)
        .then((profile) => {
            res.render('profile', {
                profile: profile
            });
        })
        .catch(next)
}

getProfiles = (req, res, next) => {
    profileService.getProfiles()
        .then((profiles) => {
            res.render('profiles', {
                profiles: profiles
            })
        })
        .catch(next)
}

createProfile = (req, res, next) => {
    profileService.createProfile(req.profile)
        .then(() => {
            res.redirect('register')
        })
        .catch(next)
}

updateProfile = (req, res, next) => {
    profileService.updateProfile(req.profile)
        .then((profile) => {
            res.render('update-profile', {
                profile: profile
            })
        })
        .catch(next)
}

deleteProfile = (req, res, next) => {
    profileService.deleteProfile(req.params.id)
        .then(() => {
            res.redirect('profiles')
        })
        .catch(next)
}

exports.getProfile = getProfile;
exports.getProfiles = getProfiles;
exports.createProfile = createProfile;
exports.updateProfile = updateProfile;
exports.deleteProfile = deleteProfile;