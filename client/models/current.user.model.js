import User from './user.model'

const http = require('es6-request');

class CurrentUser extends User {

    constructor() {
        super();
    }

    login() {
        // you can exchange "get" with "head", "delete" or "options" here 
        // they all have the exact same API 
        http.get('http://localhost:3000/api/things')
            .then((body) => {
                console.log(body);
                // should output this README file! 
            });
    }

    logout() {
        console.log('logging out');
    }

    singnup() {
        console.log('signing up');
    }
}

export default CurrentUser;