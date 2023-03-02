class User {
    constructor(login, password) {
        this.id = Date.now();
        this.login = login;
        this.password = password;
    }

}

module.exports = User;