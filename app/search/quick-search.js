//Search by key word
const knex = require('../../database/knex-connection');

class QuickSearch {
    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    getQuery() {
        let condition = this.getValue();
        return knex.select('articles.*', 'credentials.username')
            .table('articles')
            .innerJoin('credentials', 'articles.author', '=', 'credentials.user_id')
            .where('articles.status', '=', 'accepted')
            .andWhere(function () {
                this.where('articles.title', 'like', '%' + condition + '%')
                    .orWhere('credentials.username', 'like', '%' + condition + '%')
                    .orWhere('articles.content', 'like', '%' + condition + '%')
            })
            .orderBy('articles.create_at', 'desc');
    }
}

module.exports = QuickSearch;