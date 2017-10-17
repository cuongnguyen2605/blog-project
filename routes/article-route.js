const router = require('express').Router();

//Middlewares
const articlesValidator = require('../http/middlewares/article-validator');
const articleStatusConverter = require('../http/middlewares/article-status-converter');

const newArticleConverter = require('../http/middlewares/article-validator').newArticleConverter;
const articleEditingConverter = require('../http/middlewares/article-validator').articleConverterWithEditing;
const acceptedArticleStatusConverter = require('../http/middlewares/article-status-converter').acceptedArticle;
const rejectedArticleStatusConverter = require('../http/middlewares/article-status-converter').rejectedArticle;
const waitingArticleStatusConverter = require('../http/middlewares/article-status-converter').waitingArticle;

const moderatorRequireMiddleware = require('../http/middlewares/moderator-require-middleware');
const canCreatingArticle = require('../http/middlewares/can-creating-article-middleware');
const commentValidator = require('../http/middlewares/comment-middleware');
const quickSearchCondition = require('../http/middlewares/condition-factory').quickSearchCondition;
const searchAdvanceCondition = require('../http/middlewares/condition-factory').searchAdvanceCondition;

//Controlles
const getAllArticlesForMember = require('../http/controllers/article-controller').getAllArticlesWithMember;
const getAllArticlesForModerator = require('../http/controllers/article-controller').getAllArticlesWithModerator;
const getMyArticles = require('../http/controllers/article-controller').getMyArticles;
const statusChangingArticle = require('../http/controllers/article-controller').statusChanging;

const getArticleForEdit = require('../http/controllers/article-controller').getArticle;
const articleDetail = require('../http/controllers/article-controller').articleDetail;
const articleCreating = require('../http/controllers/article-controller').articleCreating;
const articleEditing = require('../http/controllers/article-controller').articleEditing;
const articleDeleting = require('../http/controllers/article-controller').articleDeleting;

const SearchAdvanceController = require('../http/controllers/search-advance-controller');
const SearchQuickController = require('../http/controllers/search-quick-controller');
const createComment = require('../http/controllers/comment-controller').createComment;
const deleteComment = require('../http/controllers/comment-controller').deleteComment;

//List
router.get('/', getAllArticlesForMember);

router.get('/detail/:articleId', articleDetail);

router.get('/my-articles/:user_id', getMyArticles);

router.get('/create', canCreatingArticle, (req, res) => {
    return res.render('article-creator.ejs', {errors: ""});
});
//Create, Edit
router.post('/create', newArticleConverter, articleCreating);

router.get('/edit/:articleId', getArticleForEdit);

router.post('/edit/:articleId', articleEditingConverter, articleEditing);

router.get('/delete/:articleId', articleDeleting);

//Accept, Reject Or Delete a Article
router.get('/list', moderatorRequireMiddleware, getAllArticlesForModerator);

router.get('/accept/:articleId', moderatorRequireMiddleware, acceptedArticleStatusConverter, statusChangingArticle);

router.get('/reject/:articleId', moderatorRequireMiddleware, rejectedArticleStatusConverter, statusChangingArticle);

router.get('/unreject/:articleId', moderatorRequireMiddleware, waitingArticleStatusConverter, statusChangingArticle);

//Comment
router.post('/comment/:article_id', commentValidator, createComment);

router.get('/comments/delete/:comment_id/:article_id', deleteComment);

//Search
router.post('/search', quickSearchCondition, SearchQuickController);
router.post('/search-advance', searchAdvanceCondition, SearchAdvanceController);

module.exports = router;