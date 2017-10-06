const knex = require('../../database/knex-connection');

class ArticleSearchingByTime {
    articleSearching(condition) {
        return knex.select('articles.*', 'credentials.username').table('articles')
            .leftJoin('credentials', {'credentials.user_id': 'articles.author'})
            .where('status', '=', 'accepted')
            .andWhere('articles.create_at', 'like', '%' + condition + '%');
    }

    // articleSearchingByYear (condition) {
    //     return knex('Articles').where('year(created)','=', condition);
    // }
    //
    // articleSearchingByYearAndMonth (condition) {
    //     return knex('Articles').where('year(created)','=', condition.year).where('month(created)', '=', condition.month);
    // }
}

module.exports = ArticleSearchingByTime;