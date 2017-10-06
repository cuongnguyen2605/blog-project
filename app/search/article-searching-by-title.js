const knex = require('../../database/knex-connection');

class ArticleSearchingByTitle {
    articleSearching(condition) {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('status', '=', 'accepted')
            .andWhere('articles.title', 'like', '%' + condition + '%');
    }
}

module.exports = ArticleSearchingByTitle;