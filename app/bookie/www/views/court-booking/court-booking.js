angular.module('starter').controller('CourtBookingCtrl', function(
  $scope,
  $http,
  $state,
  $ionicPopup,
  $timeout
){

  $scope.courts = [];

  $scope.model = {
    court: 1

  };

  $http.get('../../assets/data/courts.json')
    .success(function(data){

    $scope.courts = data;
    $scope.courts.courtNumber = $state.params.number;
    $scope.selectedCourt = $state.params.name;
    // $scope.selectedCourt = $state.params.courtID;

      // console.log($scope.courts);
      // console.log($scope.courts.courtNumber);

      $scope.courtNumber = [];

      for(var i=1; i<$scope.courts.courtNumber.length/2; i++){
        $scope.courtNumber.push(i);
      }

      // console.log($scope.courtNumber);
  });

  $scope.hoursArray = [];

  for(var j=9; j<22;j++){

    $scope.hoursArray.push(j);

  }


  $scope.selectedHour = {
    confirm: true
  };


  $scope.showPopup = function(hour) {


    //pass in the selected hour
    $scope.hours = {
      hrs: hour,
      confirmed: false
    };
    console.log(hour);

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<p>Ali želiš rezervirati igrišče ob {{hours.hrs}}.00?</p>',
      title: 'Rezerviraj igrišče',
      scope: $scope,
      buttons: [
        {
          text: 'Prekliči',
          type: 'button-balanced button-outline',
          onTap: function(e) {

            $scope.hours.confirmed = false;
            return true;

          }
        },
        {
          text: 'Potrdi',
          type: 'button-balanced',
          onTap: function(e) {

            $scope.hours.confirmed = true;
            $scope.hours.confirmed = $scope.selectedHour.confirm;
            return true;


          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log($scope.hours.confirmed, res);
    });

    $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 5000);
  };


});

