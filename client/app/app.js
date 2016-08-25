'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import login from './login/login.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import cloudy from '../components/cloudy-background/cloudy.component';


// MODELS
import models from '../models'

import './app.scss';

angular.module('taskTrackerApp', [
    // ngAnimate,
    ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, uiBootstrap,
    // ngMessages,
    navbar, footer, main, login, constants, socket, util, cloudy, models
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['taskTrackerApp'], {
      strictDi: true
    });
  });
