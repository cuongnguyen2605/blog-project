const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage}).single('articlePhoto');

module.exports = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            next(err);
        }
        if (!req.file) {
            res.status(404).json({
                status: 'Fail'
            });
        }
        return res.status(200).json({
            status: 'Success',
            link: `/uploads/${req.file.filename}`
        });
    });
};