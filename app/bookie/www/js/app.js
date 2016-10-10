// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ionic-material',
  'ui.router',
  'ui.calendar',
])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'views/register/register.html',
        controller: 'RegisterCtrl'
      });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
      });

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
      })

      .state('app.court-selection', {
        url:'/location-selection',
        views:{
          'menuContent':{
            templateUrl:'views/location-selection/location-selection.html',
            controller:'CourtSelectionCtrl'
          }
        }

      })

      .state('app.court-detail', {
        url:'/location-selection/:courtID',
        views:{
          'menuContent':{
            templateUrl:'views/location-selection/location-details/location-details.html',
            controller:'CourtSelectionCtrl'
          }
        }
      })

      .state('app.favourite-courts', {
        url:'/favourite-courts',
        views:{
          'menuContent':{
            templateUrl:'views/favourite-courts/favourite-courts.html',
            controller:'CourtSelectionCtrl'
          }
        }
      })

      .state('app.court-booking', {
        url:'/court-booking/:number/:name',
        views:{
          'menuContent':{
            templateUrl:'views/court-booking/court-booking.html',
            controller:'CourtBookingCtrl'
          }
        }
      });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/location-selection');
  });

angular.module('starter').run(function($rootScope) {

  $rootScope.safeApply = function(fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
