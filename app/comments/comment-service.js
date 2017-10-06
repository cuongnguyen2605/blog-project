const Promise = require('bluebird');

class CommentService {
    constructor (mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
        this.mysqlConnection.query = Promise.promisify(mysqlConnection.query);
    }

    getComment (comment_id) {
        let query = 'SELECT * FROM comments WHERE comment_id = ?';
        return this.mysqlConnection.query(query, [comment_id]);
    }

    createComment (comment) {
        let query = 'INSERT INTO comments WHERE comment = ?'
        return this.mysqlConnection.query(query, [comment]);
    }

    deleteComment (comment_id) {
        return this.mysqlConnection.query(query, [comment_id]);
    }
}

module.exports = CommentService;