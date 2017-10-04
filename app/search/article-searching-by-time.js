const knex = require('../../database/mysql-connection');

class ArticleSearchingByTime {
    articleSearching(condition) {
        return knex.select('articles.*', 'profiles.fullname')
            .table('articles').leftJoin('profiles', {'profiles.profile_id': 'articles.author'})
            .where('articles.created','like','%'+condition+'%')
            .andWhere('status', '=', 'accepted');
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