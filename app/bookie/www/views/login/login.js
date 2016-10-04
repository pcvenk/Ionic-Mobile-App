
angular.module('starter').controller('LoginCtrl', function($scope, $http, authService, $state){

  $scope.loginUser = {};

  $scope.login = function(){

    authService.loginUser($scope.loginUser, function(res){

      $state.go('app.court-selection');

    });

  };


});

