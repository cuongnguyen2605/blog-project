const md5 = require('md5');
const knex = require('../../database/knex-connection');
class Registrator{
    constructor(username, password, fullname){
        this.fullname = fullname;
        this.username = username;
        this.password = password;
    }

    getFullname(){
        return this.fullname;
    }
    getPassword(){
        let password = md5(this.password);
        return password;
    }
    getUsername(){
        return this.username;
    }

    setPhone(phone){
        this.phone = phone;
    }
    getPhone(){
        return this.phone;
    }
    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setAddress(address){
        return this.address = address;
    }
    getAddress(){
        return this.address;
    }
    checkExistedAcount(){
        return knex('credentials').where('username', this.getUsername());
    }
    register(){
        knex.raw('insert into credentials values(?, ?, ?, ?)'
            ,[null,this.getUsername(), this.getPassword(), 'member'])
            .then(()=>{
                knex.select().from('credentials').where('username',this.getUsername())
                    .then(result=>{
                        return knex.insert({profile_id: null,user_id: result[0].user_id,
                            fullname: this.getFullname()
                            ,username: this.getUsername()
                            ,email: this.getEmail(), phone: this.getPhone(), address: this.getAddress()
                            ,created: knex.fn.now()})
                            .into('profiles');
                    })
            });
    }
}

module.exports = Registrator;