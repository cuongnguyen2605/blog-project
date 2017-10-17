const articles = require('../../app/articles/article');
const articleRepo = require('../../app/articles/article-repository');
const mysqlConnection = require('../../database/mysql-connection');
const CommentService = require('../../app/comments/comment-service');

let articleRepository = new articleRepo();
let commentService = new CommentService(mysqlConnection);

module.exports.getAllArticlesWithMember = (req, res, next) => {
    articleRepository.getAllArticlesForMember()
        .then((articles) => {
            res.render('articles-list-with-member', {
                articles: articles
                , username: req.session.username
                , role: req.session.role
                , user_id: req.session.user_id
            });
        })
        .catch(next);
};

module.exports.getAllArticlesWithModerator = (req, res, next) => {
    articleRepository.getAllArticlesForMod()
        .then((articles) => {

            res.render('articles-list-with-moderator', {
                articles: articles
                , username: req.session.username
                , role: req.session.role
            });

        })
        .catch(next);
};

module.exports.articleDetail = (req, res, next) => {
    Promise.all([
        articleRepository.getArticle(req.params.articleId),
        commentService.getComment(req.params.articleId),
        articleRepository.getAuthorId(req.params.articleId)
    ])
        .then(([article, comments, author]) => {
            res.render('article-detail', {
                article: article,
                comments: comments,
                authorId: author[0].author,
                username: req.session.username,
                role: req.session.role,
                user_id: req.session.user_id
            });
        })
        .catch(next);
};

module.exports.articleCreating = (req, res) => {
    return articleRepository.articleCreating(req.article)
        .then((article_id) => {
            res.redirect('/articles/detail/' + article_id);
        });
};

module.exports.getArticle = (req, res, next) => {
    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render('article-editor', {article: article});
        })
        .catch(next);
};

module.exports.articleEditing = (req, res) => {
    return articleRepository.articleEditing(req.article)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.articleId);
        });
};

module.exports.statusChanging = (req, res) => {
    return articleRepository.articleStatusChanging(req.article.status, req.article.article_id)
        .then(() => {
            res.redirect('/articles/list');
        });
};

module.exports.articleDeleting = (req, res) => {
    return articleRepository.articleDeleting(req.params.articleId)
        .then(() => {
            if (req.session.role === 'member') {
                res.redirect('/articles');
            }
            if (req.session.role === 'moderator') {
                res.redirect('/articles/list');
            }
        });
};