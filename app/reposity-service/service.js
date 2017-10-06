const Selection = require('./selection');
const Insertion = require('./insertion');
class Service{
    constructor(){
        this.ServiceList = new Map();
        this.ServiceList.set("select", new Selection());
        this.ServiceList.set('insert', new Insertion());

    }
    getServiceSelect(name, user, pass){//overload func getService
        switch (arguments.length){
            case 1:
                return this.ServiceList.get(name).run();
                break;
            case 2:
                return this.ServiceList.get(name).run(user);//dich vu get profile
             break;
            case 3:
                return this.ServiceList.get(name).run(user, pass);
            break;
        }
    }
    getServiceInsert(name, username, password,fullname, phoneNumber,email, address){
        switch (arguments.length){


            case 4:
                return this.ServiceList.get(name).run(username, password, fullname);
            break;
            case 7:
                return this.ServiceList.get(name).run(username, password,fullname, phoneNumber,email, address);
            break;
        }
    }

}

// var a = new Service();
// a.getServiceInsert('insert', 'honghic','12345','hahaahah','34234242','dohuy171@gmail.com','hn');
module.exports= Service;