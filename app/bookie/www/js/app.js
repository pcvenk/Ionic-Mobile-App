// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ionic-material',
  'ui.router'
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
            controller:'CourtSelectionCtrl',
            resolve: {

              list: function(courtService){
                return courtService.getList();
              }
            }

          }
        }

      })

      .state('app.court-detail', {
        url:'/court-detail/:courtID',
        views:{
          'menuContent':{
            templateUrl:'views/location-selection/location-details/location-details.html',
            controller:'CourtSelectionCtrl'
            // resolve: {
            //
            //   loginStatus:function($http, authService){
            //
            //     return authService.loginStatus();
            //   }
            //
            // }

          }
        }
      })

      .state('app.favourite-courts', {
        url:'/favourite-courts',
        views:{
          'menuContent':{
            templateUrl:'views/favourite-courts/favourite-courts.html',
            controller:'CourtSelectionCtrl'
            // resolve: {
            //
            //   loginStatus:function($http, authService){
            //
            //     return authService.loginStatus();
            //   }
            //
            // }
          }
        }
      })

      .state('app.logout', {
        url:'/logout',
        views:{
          'menuContent':{
            templateUrl:'views/logout/logout.html',
            controller:'LogoutCtrl'
            // resolve: {
            //
            //   loginStatus:function($http, authService){
            //
            //     return authService.loginStatus();
            //   }
            //
            // }
          }
        }
      })

      .state('app.court-booking', {
        url:'/court-booking/:number/:name',
        views:{
          'menuContent':{
            templateUrl:'views/court-booking/court-booking.html',
            controller:'CourtBookingCtrl'
            // resolve: {
            //
            //   loginStatus:function($http, authService){
            //
            //     return authService.loginStatus();
            //   }
            //
            // }
          }
        }
      });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/location-selection');
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
