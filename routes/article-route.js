const router = require('express').Router();

const articlesValidator = require('../http/middlewares/article-validator');
const articlesController = require('../http/controllers/article-controller');
const articleStatusConverter = require('../http/middlewares/article-status-converter');
const moderatorRequireMiddleware = require('../http/middlewares/moderator-require-middleware');
const canCreatingArticle = require('../http/middlewares/can-creating-article-middleware');
const canEditingArticle = require('../http/middlewares/can-creating-article-middleware');
const articleSearchingController = require('../http/controllers/searching-article-controller');
const articleSearchingDataFilter = require('../http/middlewares/article-searching-data-filter');

router.get('/', articlesController.getAllArticlesWithMember);

router.get('/detail/:articleId', articlesController.articleDetail);

router.get('/create', canCreatingArticle, (req, res) => {
    return res.render('article-creator.ejs',{errors: ""});
});

router.post('/create', articlesValidator.newArticleConverter, articlesController.articleCreating);

router.get('/edit/:articleId', canEditingArticle, articlesController.getArticle);

router.post('/edit/:articleId', articlesValidator.articleConverterWithEditing, articlesController.articleEditing);

//Accept, Reject Or Delete a Article
router.get('/list', moderatorRequireMiddleware, articlesController.getAllArticlesWithModerator);

router.get('/accept/:articleId', moderatorRequireMiddleware, articleStatusConverter.acceptedArticle, articlesController.statusChanging);

router.get('/reject/:articleId', moderatorRequireMiddleware, articleStatusConverter.rejectedArticle, articlesController.statusChanging);

router.get('/unreject/:articleId', moderatorRequireMiddleware, articleStatusConverter.waitingArticle, articlesController.statusChanging);

router.get('/delete/:articleId', moderatorRequireMiddleware, articlesController.articleDeleting);

//Search

router.post('/search', articleSearchingDataFilter.searchingDataFilter, articleSearchingController.search);

module.exports = router;