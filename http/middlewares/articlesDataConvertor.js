module.exports.newArticleConvertor = (req, res, next) => {
    req.article = {
        title: req.body.title,
        author: 2,
        create_at: new Date(),
        content: req.body.content,
        status: "waiting"
    }
    next();
}

module.exports.articleConvertorWithEditing = (req, res, next) => {
    req.article = {
        id: req.params.articleId,
        title: req.body.title,
        content: req.body.content,
    }
    next();
}