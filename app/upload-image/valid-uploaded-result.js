/*
    This class implements an interface name UploadedImageValidatingResult
    with function getMessage()
 */

class ValidUploadedResult {

    constructor(message) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}

module.exports = ValidUploadedResult;