const articles = require('../../app/articles/article');
const articleRepo = require('../../app/articles/article-repository');
const mysqlConnection = require('../../database/mysql-connection');
const CommentService = require('../../app/comments/comment-service');

let articleRepository = new articleRepo();
let commentService = new CommentService(mysqlConnection);

exports.getAllArticlesWithMember = (req, res, next) => {
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

exports.getAllArticlesWithModerator = (req, res, next) => {
    articleRepository.getAllArticlesForMod()
        .then((articles) => {
            res.render('articles-list-with-moderator', {
                articles: articles
                , username: req.session.username
                , role: req.session.role
                , user_id: req.session.user_id
            });
        })
        .catch(next);
};

exports.getMyArticles = (req, res, next) => {
    articleRepository.getMyArticles(req.params.user_id)
        .then((articles) => {
            res.render('my-articles', {
                articles: articles
                , username: req.session.username
                , role: req.session.role
                , user_id: req.session.user_id
            });

        })
        .catch(next);
};

exports.articleDetail = (req, res, next) => {
    Promise.all([
        articleRepository.getArticle(req.params.articleId),
        commentService.getComments(req.params.articleId),
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

exports.articleCreating = (req, res) => {
    return articleRepository.articleCreating(req.article)
        .then((article_id) => {
            res.redirect('/articles/detail/' + article_id);
        });
};

exports.getArticle = (req, res, next) => {
    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render('article-editor', {article: article});
        })
        .catch(next);
};

exports.articleEditing = (req, res) => {
    return articleRepository.articleEditing(req.article)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.articleId);
        });
};

exports.articleAccepting = (req, res) => {
    return articleRepository.articleStatusChanging("accepted", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list');
        });
};

exports.articleRejecting = (req, res) => {
    return articleRepository.articleStatusChanging("rejected", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list');
        });
};

exports.articleUnrejecting = (req, res) => {
    return articleRepository.articleStatusChanging("waiting", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list');
        });
};

exports.articleDeleting = (req, res) => {
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