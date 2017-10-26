const router = require('express').Router();

//Middlewares
const newArticleConverter = require('../http/middlewares/article-validator').newArticleConverter;
const articleEditingConverter = require('../http/middlewares/article-validator').articleConverterWithEditing;
const moderatorRequireMiddleware = require('../http/middlewares/moderator-require-middleware');
const canCreatingArticle = require('../http/middlewares/can-creating-article-middleware');
const commentValidator = require('../http/middlewares/comment-middleware');
const quickSearchCondition = require('../http/middlewares/condition-factory').quickSearchCondition;
const searchAdvanceCondition = require('../http/middlewares/condition-factory').searchAdvanceCondition;
const CheckAliveSession = require('../http/middlewares/check-alive-session');

//Controlles
const getAllArticlesForMember = require('../http/controllers/article-controller').getAllArticlesWithMember;
const getAllArticlesForModerator = require('../http/controllers/article-controller').getAllArticlesWithModerator;
const getMyArticles = require('../http/controllers/article-controller').getMyArticles;
const getArticleForEdit = require('../http/controllers/article-controller').getArticle;

const articleAccepting = require('../http/controllers/article-controller').articleAccepting;
const articleRejecting = require('../http/controllers/article-controller').articleRejecting;
const articleUnrejecting = require('../http/controllers/article-controller').articleUnrejecting;

const articleDetail = require('../http/controllers/article-controller').articleDetail;
const articleCreating = require('../http/controllers/article-controller').articleCreating;
const articleEditing = require('../http/controllers/article-controller').articleEditing;
const articleDeleting = require('../http/controllers/article-controller').articleDeleting;

const SearchAdvanceController = require('../http/controllers/search-advance-controller');
const SearchQuickController = require('../http/controllers/search-quick-controller');
const createComment = require('../http/controllers/comment-controller').createComment;
const deleteComment = require('../http/controllers/comment-controller').deleteComment;
const uploadImage = require('../app/upload-image/upload-image');

//List
router.get('/',CheckAliveSession, getAllArticlesForMember);

router.get('/detail/:articleId', articleDetail);

router.get('/my-articles/:user_id', getMyArticles);

router.get('/create', canCreatingArticle, (req, res) => {
    return res.render('article-creator.ejs', {errors: ""});
});
//Create, Edit
router.post('/upload', uploadImage);

router.post('/create', newArticleConverter, articleCreating);

router.get('/edit/:articleId', getArticleForEdit);

router.post('/edit/:articleId', articleEditingConverter, articleEditing);

router.get('/delete/:articleId', articleDeleting);

//Accept, Reject Or Delete a Article
router.get('/list',CheckAliveSession, moderatorRequireMiddleware, getAllArticlesForModerator);

router.get('/accept/:articleId', moderatorRequireMiddleware, articleAccepting);

router.get('/reject/:articleId', moderatorRequireMiddleware, articleRejecting);

router.get('/unreject/:articleId', moderatorRequireMiddleware, articleUnrejecting);

//Comment
router.post('/comment/:article_id', commentValidator, createComment);

router.get('/comments/delete/:comment_id/:article_id', deleteComment);

//Search
router.post('/search', quickSearchCondition, SearchQuickController);

router.post('/search-advance', searchAdvanceCondition, SearchAdvanceController);

module.exports = router;