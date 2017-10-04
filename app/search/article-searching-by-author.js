const knex = require('../../database/mysql-connection');

class ArticleSearchingByAuthor {
    articleSearching(condition) {
        return knex.select('articles.*', 'profiles.fullname')
            .table('articles').innerJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('profiles.fullname','like','%'+condition+'%');
    }
}

module.exports = ArticleSearchingByAuthor;