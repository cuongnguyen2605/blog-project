class Credentials {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setRole(role) {
        this.role = role;
        return this;
    }
    getRole(){
        return this.role;
    }
    getUsername(){
        return this.username;
    }
}

module.exports = Credentials;