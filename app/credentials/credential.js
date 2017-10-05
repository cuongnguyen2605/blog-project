class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setRole(role) {
        this.role = role;
        return this;
    }
}

module.exports = Credentials;s