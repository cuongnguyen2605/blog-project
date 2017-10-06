const knex = require('../../database/knex-connection');

class ArticleSearchingByAuthor {
    articleSearching(condition) {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('status', '=', 'accepted')
            .andWhere('credentials.username','like','%'+condition+'%');
    }
}

module.exports = ArticleSearchingByAuthor;