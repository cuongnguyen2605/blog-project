const knex = require('../../database/knex-connection');

class SearchAdvance {
    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setAuthor(author) {
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    setStartDate(start) {
        this.start = start;
    }

    getStartDate() {
        return this.start;
    }

    setEndDate(end) {
        this.end = end;
    }

    getEndDate() {
        return this.end;
    }

    getQuery() {
        return knex.select('articles.*', 'credentials.username')
            .table('articles')
            .innerJoin('credentials', 'articles.author', '=', 'credentials.user_id')
            .where('articles.title', 'like', '%' + this.getTitle() + '%')
            .andWhere('credentials.username', 'like', '%' + this.getAuthor() + '%')
            .andWhereBetween('articles.create_at', [this.getStartDate(), this.getEndDate()])
            .where('articles.status', '=', 'accepted')
            .orderBy('articles.create_at', 'desc');
    }
}

module.exports = SearchAdvance;