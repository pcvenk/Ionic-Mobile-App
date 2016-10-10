angular.module('starter').controller('CourtBookingCtrl', function(
  $scope,
  $http,
  $state,
  $ionicPopup,
  $timeout
){

  $scope.courts = [];

  $scope.model = {
    court: 1,
    selected: true,
    day: Date.now()

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


  });

  $scope.daysArray = [];

  $scope.formattedDate = new Date(Date.now());
  $scope.year = $scope.formattedDate.getFullYear();
  $scope.month = $scope.formattedDate.getMonth() +1;

  if($scope.month<10){
    $scope.month = '0' + $scope.month;
  }

  $scope.date = $scope.formattedDate.getDate();

  if($scope.date<10){
    $scope.date = '0' + $scope.date;
  }

  $scope.newDate = $scope.date + '/' + $scope.month;

  for(var k = $scope.newDate; k < $scope.newDate+7; k++){

    $scope.daysArray.push(k);

  }

  $scope.hoursArray = [];

  for(var j = 9; j < 22; j++){

    $scope.hoursArray.push(j);

  }

  $scope.selected = $scope.selectedHour;


  $scope.showPopup = function(hour) {

    //pass in the selected hour
    $scope.selectedHour = {
      hrs: hour,
      confirmed: false
    };
    console.log(hour);

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<p>Ali želiš rezervirati igrišče ob {{selectedHour.hrs}}.00?</p>',
      title: 'Rezerviraj igrišče',
      scope: $scope,
      buttons: [
        {
          text: 'Prekliči',
          type: 'button-balanced button-outline',
          onTap: function(e) {

            return true;

          }
        },
        {
          text: 'Potrdi',
          type: 'button-balanced',
          onTap: function() {

            $scope.selectedHour.confirmed = true;

            return true;

          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log($scope.selectedHour.confirmed , res);
    });

    $timeout(function() {
      myPopup.close($scope.selectedHour); //close the popup after 3 seconds for some reason
    }, 5000);
  };


});

