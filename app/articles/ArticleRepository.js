const mysqlConnection = require('../../database/knexfile');
const articles = require('./Articles');

class ArticleRepository {
    constructor() {

    }

    getAllArticles() {
        return mysqlConnection.select('articles.*', 'profiles.fullname').table('articles').innerJoin('profiles', {'profiles.profile_id': 'articles.author'});
    };

    getArticle(articleId) {
        return mysqlConnection('articles').where('article_id', '=', articleId);
    };

    articleCreating(articleInfor) {
        return mysqlConnection('articles').insert(articleInfor);
    }

    articleEditing(articleInfor) {
        return mysqlConnection('articles').update({
            title: articleInfor.title,
            content: articleInfor.content
        }).where('article_id', '=', articleInfor.id);
    }

    articleStatusChanging(newStatus, articleId) {
        return mysqlConnection('articles').where('article_id', articleId).update({
            status: newStatus
        });
    }

    articleDeleting(articleId) {
        return mysqlConnection('articles').where('article_id', '=', articleId).del();
    }
}

module.exports = ArticleRepository;