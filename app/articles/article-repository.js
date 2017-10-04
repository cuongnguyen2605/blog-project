const knex = require('../../database/mysql-connection');
const articles = require('./article');

class ArticleRepository {
    constructor() {

    }

    getAllArticlesForMember() {
        return knex.select('articles.*', 'profiles.fullname').table('articles')
            .leftJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('status', '=', 'accepted');
    };

    getAllArticlesForModerator() {
        return knex.select('articles.*', 'profiles.fullname').table('articles')
            .leftJoin('profiles', {'profiles.profile_id': 'articles.author'});
    };

    getArticle(articleId) {
        return knex.select('articles.*', 'profiles.fullname').table('articles')
            .innerJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('article_id', '=', articleId);
    };

    articleCreating(articleInfor) {
        return knex('articles').insert(articleInfor).returning('article_id');
    }

    articleEditing(articleInfor) {
        return knex('articles').update({
            title: articleInfor.title,
            content: articleInfor.content
        }).where('article_id', '=', articleInfor.id);
    }

    articleStatusChanging(newStatus, articleId) {
        return knex('articles').where('article_id', articleId).update({
            status: newStatus
        });
    }

    articleDeleting(articleId) {
        return knex('articles').where('article_id', '=', articleId).del();
    }
}

module.exports = ArticleRepository;