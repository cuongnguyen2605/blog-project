/*
    This class implements an interface name UploadedImageValidatingResult
    with function getMessage()
 */

class InvalidUploadedResult {

    constructor(message) {
        this.message = message;
    }

    getMessage(){
        return this.message;
    }
}