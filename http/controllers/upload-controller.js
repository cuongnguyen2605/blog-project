const Uploader = require('../../app/upload-image/upload-image');
let uploader = new Uploader();
module.exports = function (req, res) {

    uploader.upload(req, res, function (err) {
        if (err) {
            return res.status(500).json({link: '/uploads/default.jpg', message: 'size of image not exceed 5mb'});

        }
        if (!req.file) {
            return res.status(404).json({
                status: 'Fail'
            });
        }
        return res.status(200).json({
            status: 'Success',
            link: `/uploads/${req.file.filename}`
        });
    });
};