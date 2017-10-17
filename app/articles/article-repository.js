const knex = require('../../database/knex-connection');
const articles = require('./article');

class ArticleRepository {
    constructor() {

    }

    getAllArticlesForMember() {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('articles.status', '=', 'accepted');
    }

    getAllArticlesForMod() {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'});
    }

    getArticle(articleId) {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .innerJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('article_id', '=', articleId);
    }

    getAuthorId(articleId) {
        return knex.select('articles.author').table('articles')
            .where('article_id', '=', articleId);
    }

    articleCreating(articleInfor) {
        return knex('articles').insert(articleInfor).returning('article_id');
    }

    articleEditing(articleInfor) {
        return knex('articles').update({
            title: articleInfor.title,
            content: articleInfor.content
        }).where('article_id', '=', articleInfor.article_id);
    }

    articleStatusChanging(newStatus, articleId) {
        return knex('articles').where('article_id', articleId).update({status: newStatus});
    }

    articleDeleting(articleId) {
        return knex('articles').where('article_id', '=', articleId).del();
    }
}

module.exports = ArticleRepository;
