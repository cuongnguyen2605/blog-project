const knex = require('../../database/mysql-connection');

class AritcleSearchingWithNullCondition {
    articleSearching(condition) {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('status', '=', 'accepted');
    }
}

module.exports = AritcleSearchingWithNullCondition;