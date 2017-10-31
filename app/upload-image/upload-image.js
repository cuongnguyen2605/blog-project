const multer = require('multer');
const path = require('path');
const maxSize = 5* 1000 * 1000;
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

class Uploader{
    constructor(){
        this.upload = multer({
            storage: storage,
            limits: { fileSize: maxSize },
            fileFilter: function (req, file, callback) {
                let ext = path.extname(file.originalname);
                if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                    callback(new Error('Upload file must be image!'));
                    return callback(null, false);
                }
                else return callback(null, true);
            }
        }).single('file');
    }
}

module.exports = Uploader;