
class UploadedImageValidator{

    constructor(path) {
        this.path = path
    }

    validate(uploadedFile){
        let ext = this.path.extname(uploadedFile);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return new InvalidUploadedResult('Uploaded file must be image!');
        }
        // TODO if file is to large ( >5M )
        //return new InvalidUploadedResult('Uploaded file too large')

        return new ValidUploadedResult('Success');
    }
}