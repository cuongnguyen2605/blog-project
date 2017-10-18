class Credentials {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setUserId(user_id) {
        this.user_id = user_id;
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    setRole(role) {
        this.role = role;
        return this;
    }

    getRole() {
        return this.role;
    }

    getUsername() {
        return this.username;
    }
}

module.exports = Credentials;