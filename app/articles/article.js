class Articles {

    constructor(title, createdDate, content) {
        this.title = title;
        this.createdDate = createdDate;
        this.content = content;
    }

    setId(id) {
        this.id = id;
    }

    setAuthorId(authorId) {
        this.authorId = authorId;
    }

    setStatus(status) {
        this.status = status;
    }

    getTitle() {
        return this.title;
    }

    getCreatedDate() {
        return this.createdDate;
    }

    getContent() {
        return this.content;
    }
}

module.exports = Articles;