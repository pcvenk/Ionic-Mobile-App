angular.module('starter').controller('LogoutCtrl', function($scope, $state, authService){

  $scope.logout = function(){

    // authService.logOut = function(){

      $state.go('login');

    };

  // };


});
