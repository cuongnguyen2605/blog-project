class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
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
}

module.exports = Credentials;