const knex = require('../../database/knex-connection');
class deletion{
    run(user_id){
        knex('comments').where('user_id', user_id).del();
    }
}
module.exports = deletion;