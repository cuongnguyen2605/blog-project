class Comment {
    constructor(content, created_at) {
        this.content = content;
        this.created_at = created_at;
    }

    setCommentId(comment_id) {
        this.comment_id = comment_id;
        return this;
    }

    setArticleId(article_id) {
        this.article_id = article_id;
        return this;
    }

    setUserId(user_id) {
        this.user_id = user_id;
        return this;
    }
}

module.exports = Comment;