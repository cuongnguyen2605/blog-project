const Uploader = require('../../app/upload-image/upload-image');
let uploader = new Uploader();

module.exports = function (req, res, next) {
    uploader.upload(req, res, function (err) {
        if (err) {
            res.status(500).json({link: '/uploads/default.jpg', message: err.getMessage()});
        }
        else {
            next();
        }
    });
};
