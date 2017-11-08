const multer = require('multer');
const path = require('path');
const maxSize = 5* 1000 * 1000;
const UploadImageValidator= require('./uploaded-image-validator');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let uploadImageValidator= new UploadImageValidator(path);

class Uploader{
    constructor(){
        this.upload = multer({
            storage: storage,
            limits: { fileSize: maxSize },
            fileFilter: function (req, file, cb) {
                return cb(uploadImageValidator.validate(file),false);
            }
        }).single('file');
    }
}

module.exports = Uploader;