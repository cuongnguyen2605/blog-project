class Credentials {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    setId(id) {
        this.id = id;
    }

    setRole(role) {
        this.role = role;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Credentials;