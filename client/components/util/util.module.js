'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('taskTrackerApp.util', [])
  .factory('Util', UtilService)
  .name;
