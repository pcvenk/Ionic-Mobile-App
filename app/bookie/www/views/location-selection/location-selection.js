angular.module('starter').controller('CourtSelectionCtrl', function($scope, courtService, $state){

  $scope.courts = courtService.model.list;
  $scope.selectedCourt = $state.params.courtID;

  $scope.setFavourites = function(court){

    court.favourites = !court.favourites;

    console.log(id);

      // courtService.update($scope.court._id, $scope.court, function(data){
      //
      //
      //   $scope.court = data;
      //   console.log($scope.court);
      //
      // });

  };

  console.log($scope.courts);

});




