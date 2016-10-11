angular.module('starter').controller('CourtSelectionCtrl', function($scope, $http, $state){

 $scope.model = {
   list: [],
   item: {}

 };

  $http.get('../../assets/data/courts.json').success(function(data){


    $scope.selectedCourt = $state.params.courtID;
    $scope.courtList = data;
    angular.copy($scope.courtList, $scope.model.list);
    // $scope.model.list.push(data);

  });



  $scope.favouriteCourts = [];


  $scope.setFavorites = function(court){

    court.favourites = !court.favourites;

    if(court.favourites){
      console.log('Favorite');

      $scope.favouriteCourts.push(court);
      $scope.fav = $state.params.fav;

      // $scope.model.item.favourites = true;
      // angular.copy(court, $scope.model.list);
      // $scope.model.item.push(court);

      // var updatedItem = $scope.model.item;
      //
      // $scope.updatedCourt = function(updatedItem){
      //   var newItem = angular.copy(updatedItem);


      // };
    }

  };

  console.log($scope.model.list);
  console.log($scope.favouriteCourts);

});




