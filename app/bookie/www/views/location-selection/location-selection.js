angular.module('starter').controller('CourtSelectionCtrl', function($scope, $http, $state, $stateParams){


  $scope.courts = [];

  $http.get('../../assets/data/courts.json').success(function(data){

    $scope.courts = data;
    $scope.selectedCourt = $state.params.courtID;

  });

  $scope.setFavorites = function(court){

    court.favorites = !court.favorites;

  };

  $scope.moreInfo = function(){

    href="#/app/location-selection/{{court.name}}"

  };

  $scope.bookCourt = function(){

    $state.go('app.court-booking');

  }


});




