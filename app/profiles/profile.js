class Profile {
    constructor (fullname, username, email, phone, address, created) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.created = created;
    }

    getProfileId (profile_id) {
        this.getProfileId = profile_id;
        return this;
    }
}

module.exports = Profile;