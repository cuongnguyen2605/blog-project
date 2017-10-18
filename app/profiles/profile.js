class Profile {
    // constructor () {
    //     this.fullname = fullname;
    //     this.username = username;
    //     this.email = email;
    //     this.phone = phone;
    //     this.address = address;
    //     this.created = created;
    // }
    setUserId(user_id){
        this.user_id = user_id;
    }
    getUserId(){
        return this.user_id;
    }
    setFullname(fullname){
        this.fullname = fullname;
    }
    getFullname(){
        return this.fullname;
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