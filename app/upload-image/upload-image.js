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

const upload = multer({ storage: storage,
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            callback(new Error('Upload file must be image!'));
            return callback(null, false);
        }
           return callback(null, true);
    }}).single('file');

module.exports = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).json({error: err});

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