const Promise = require('bluebird');

class CommentService {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
        this.mysqlConnection.query = Promise.promisify(mysqlConnection.query);
    }

    getComments(article_id) {
        let query = 'select comments.*, credentials.username, profiles.fullname ' +
            'from comments ' +
            'join credentials on credentials.user_id= comments.user_id  ' +
            'join profiles on credentials.user_id = profiles.user_id ' +
            'WHERE article_id = ?';
        return this.mysqlConnection.query(query, [article_id]);
    }

    createComment(commentInfor) {
        let query = 'INSERT INTO comments SET ?';
        console.log(comment);
        return this.mysqlConnection.query(query, [commentInfor]);
    }

    deleteComment(comment_id) {
        let query = 'delete from comments where comment_id = ?';
        return this.mysqlConnection.query(query, [comment_id]);
    }
}

module.exports = CommentService;