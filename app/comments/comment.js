class Comment {
    constructor (content, created_at) {
        this.content = content;
        this.create_at = created_at;
    }

    getCommentId (comment_id) {
        this.comment_id = comment_id;
        return this;
    }
}

module.exports = Comment;