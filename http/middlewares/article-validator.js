const Article = require('../../app/articles/article');
const uploadImage = require('../../app/upload-image/upload-image');

exports.newArticleConverter = (req, res, next) => {
    let title = req.body.title;
    let author = req.session.user_id;
    let create_at = new Date();
    let content = req.body.content;
    let status = "waiting";
    if (req.session.role === "moderator") {
        status = "accepted";
    }

    req.checkBody('title', 'Title must be 10 to 100 character.').isLength({min: 10, max: 100});
    req.checkBody('content', 'Content must be more 100 character.').isLength({min: 100});

    let errors = req.validationErrors();
    if (errors) {
        res.render('article-creator', {errors: errors});
    } else {
        console.log(uploadImage);
        req.article = new Article(title, content);
        req.article.setAuthorId(author);
        req.article.setCreatedDate(create_at);
        req.article.setStatus(status);
        next();
    }
};

exports.articleConverterWithEditing = (req, res, next) => {
    let id = req.params.articleId;
    let title = req.body.title;
    let content = req.body.content;

    req.checkBody('title', 'Title must be 10 to 100 character.').isLength({min: 10, max: 100});
    req.checkBody('content', 'Content must be more 100 character.').isLength({min: 100});

    let errors = req.validationErrors();
    if (errors) {
        res.redirect('/articles/edit/' + req.params.articleId);
    } else {
        req.article = new Article(title, content);
        req.article.setId(id);
        next();
    }
};