angular.module('starter').controller('CourtSelectionCtrl', function($scope, $http, $state){

 $scope.courts = [];

  $http.get('../../assets/data/courts.json').success(function(data){


    $scope.selectedCourt = $state.params.courtID;
    $scope.courtList = data;
    angular.copy($scope.courtList,$scope.courts);


  });

  $scope.setFavorites = function(court){

    court.favorites = !court.favorites;

    if(court.favorites){
      $scope.court.favourites = true;
      $scope.courts.push(court);
    }

  };

  console.log($scope.courts);

});




