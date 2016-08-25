import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './login.routes';

import CurrentUser from '../../models/current.user.model';

export class LoginController {

    constructor() {
        this.user = new CurrentUser();
    }
}

export default angular.module('taskTrackerApp.login', [uiRouter])
    .config(routing)
    .component('login', {
        template: require('./login.html'),
        controller: LoginController,
        controllerAs: 'login'
    })
    .name;
