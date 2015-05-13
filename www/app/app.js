// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('confboilerplate', [
  'ionic',
  'ngMap',
  'underscore',
  'confboilerplate.filters',
  'confboilerplate.about',
  'confboilerplate.location',
  'confboilerplate.partners',
  'confboilerplate.schedule',
  'confboilerplate.speakers',
  'confboilerplate.sponsors'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/menu/menu.html"
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "app/about/about.html",
        controller: 'AboutCtrl'
      }
    }
  })

  .state('app.location', {
    url: "/location",
    views: {
      'menuContent': {
        templateUrl: "app/location/location.html",
        controller: 'LocationCtrl'
      }
    }
  })
  
  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "app/speakers/speakers.html",
        controller: 'SpeakersCtrl'
      }
    }
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "app/schedule/schedule.html",
        controller: 'ScheduleCtrl'
      }
    }
  })

      .state('app.attraction', {
        url: "/attraction/:attractionId",
        views: {
          'menuContent': {
            templateUrl: "app/schedule/attraction.html",
            controller: 'AttractionCtrl'
          }
        }
      })
  
  .state('app.sponsors', {
    url: "/sponsors",
    views: {
      'menuContent': {
        templateUrl: "app/sponsors/sponsors.html",
        controller: 'SponsorsCtrl'
      }
    }
  })
  
  .state('app.partners', {
    url: "/partners",
    views: {
      'menuContent': {
        templateUrl: "app/partners/partners.html",
        controller: 'PartnersCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
});
