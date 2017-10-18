class Profile {
    // constructor () {
    //     this.fullname = fullname;
    //     this.username = username;
    //     this.email = email;
    //     this.phone = phone;
    //     this.address = address;
    //     this.created = created;
    // }

    setFullname(fullname){
        this.fullname = fullname;
    }
    getFullname(){
        return this.fullname;
    }
    setUsername(username){
        this.username = username;
    }
    getUsername(){
        return this.username;
    }
    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setPhone(phone){

        this.phone = phone;
    }
    getPhone(){
        return this.phone;
    }
    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address;
    }

    getProfileId (profile_id) {
        this.getProfileId = profile_id;
        return this;
    }
}

module.exports = Profile;