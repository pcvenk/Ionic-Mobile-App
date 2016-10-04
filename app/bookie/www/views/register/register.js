
angular.module('starter').controller('RegisterCtrl', function($scope, $http, authService, $state){

    $scope.user = {};

    $scope.register = function(){

      authService.registerUser($scope.user, function(){

      console.log($scope.user);
      $state.go('login');

      });

    };



});
