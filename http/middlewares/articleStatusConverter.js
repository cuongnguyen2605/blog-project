module.exports.waitingArticle = (req, res, next) => {
    req.article = {
        article_id: req.params.articleId,
        status: "waiting"
    }
    next();
}

module.exports.acceptedArticle = (req, res, next) => {
    req.article = {
        article_id: req.params.articleId,
        status: "accepted"
    }
    next();
}

module.exports.rejectedArticle = (req, res, next) => {
    req.article = {
        article_id: req.params.articleId,
        status: "rejected"
    }
    next();
}