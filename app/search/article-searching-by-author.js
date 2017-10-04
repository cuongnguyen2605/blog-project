const knex = require('../../database/mysql-connection');

class ArticleSearchingByAuthor {
    articleSearching(condition) {
        return knex.select('articles.*', 'profiles.fullname')
            .table('articles').leftJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('profiles.fullname','like','%'+condition+'%')
            .andWhere('status', '=', 'accepted');
    }
}

module.exports = ArticleSearchingByAuthor;