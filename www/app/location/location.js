'use strict';

angular.module('confboilerplate.location', [

  'confboilerplate.location.controllers',
  'confboilerplate.location.services'
]);

angular.module('confboilerplate.location.controllers', ['underscore','ngMap','ionic']);
angular.module('confboilerplate.location.services', ['underscore','ngMap','ionic']);
