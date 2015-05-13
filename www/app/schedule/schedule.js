'use strict';

angular.module('confboilerplate.schedule', [

  'confboilerplate.schedule.controllers',
  'confboilerplate.schedule.services',
  'confboilerplate.schedule.directives',
]);

angular.module('confboilerplate.schedule.controllers', ['underscore','ionic']);
angular.module('confboilerplate.schedule.services', ['underscore','ionic']);
angular.module('confboilerplate.schedule.directives', ['underscore','ionic']);
