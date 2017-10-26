const multer = require('multer');
const path = require('path');
const randomString = require('randomstring');
const random = randomString.generate();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, "photo" + '-' + random + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage}).single('file');

module.exports = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            throw new Error("Upload failed");
        }
        if (!req.file) {
            res.status(404).json({
                status: 'Fail'
            });
        }
        res.status(200).json({
            status: 'Success',
            link: `/uploads/${req.file.filename}`
        });
    });
};