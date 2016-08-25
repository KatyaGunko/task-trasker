class User {

    constructor(options = {}) {
        this.firstName = options.firstName || '';
        this.lastName = options.lastName || '';
        this.email = options.email || '';
        this.position = options.position || '';
        this.lastLogin = options.lastLogin || '';
    }

    get fullName() {
        return this.firstName + this.lastName;
    }
}

export default User;