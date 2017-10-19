const mysqlConnection = require('../../database/mysql-connection');
const ProfileService = require('../../app/profiles/profile-service');

const profileService = new ProfileService(mysqlConnection);

getProfile = (req, res, next) => {
    profileService.getProfile(req.params.username)
        .then((profile) => {
            res.render('profile', {
                message: '',
                type: '',
                profile: profile,
                username: req.session.username,
                role: req.session.role,
                user_id: req.session.user_id
            });
        })
        .catch(next)
};

updateProfile = (req, res, next) => {
    Promise.all([
        profileService.updateProfile(req.profile),
        profileService.getProfile(req.params.username)
    ])
    .then(([successmsg,newProfile]) => {
        res.render('profile', {
            message: "Your profile was changed!",
            type: 'success',
            profile: newProfile,
            username: req.session.username,
            role: req.session.role,
            user_id: req.session.user_id
        });
    })
    .catch(next);
};

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;