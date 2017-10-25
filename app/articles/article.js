class Articles {

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    setId(article_id) {
        this.article_id = article_id;
        return this;
    }

    setAuthorId(author) {
        this.author = author;
        return this
    }

    setCreatedDate(create_at) {
        this.create_at = create_at;
        return this;
    }

    setStatus(status) {
        this.status = status;
        return this;
    }

    setImage (images) {
        this.images = images;
        return this;
    }
}

module.exports = Articles;