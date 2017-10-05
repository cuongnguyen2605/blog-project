const knex = require('../../database/mysql-connection');

class ArticleSearchingByTitle {
    articleSearching(condition) {
        return knex.select('articles.*', 'profiles.fullname')
            .table('articles').innerJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('articles.title', 'like', '%' + condition + '%');
    }
}

module.exports = ArticleSearchingByTitle;