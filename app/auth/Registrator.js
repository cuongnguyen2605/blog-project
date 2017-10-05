const Service = require('../reposity-service/service');
class Registrator{ //done
    register(username, password, fullname, phoneNumber, email, address){
        let obj = new Service();
        switch(arguments.length){
            case 3:
                obj.getServiceInsert('insert',username,password,fullname);
            break;
            case 6:
                obj.getServiceInsert('insert',username,password,fullname,phoneNumber,email,address);
            break;
        }
    }
}

module.exports = Registrator;