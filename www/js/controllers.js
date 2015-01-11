angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, RestServe, $localstorage, $ionicModal, $state) {
  $ionicModal.fromTemplateUrl('templates/locationInfo.html', {
    scope: $scope
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.closeInfo = function(){
    $scope.modal.hide();
  };
  $scope.vehicleData = {};
  $scope.key = {
    "key":"bryan2015"
  };
  /*
  RestServe.vehicles().success(function(resp){
    console.log(resp);
  });
*/
  RestServe.getBattery('WBY1Z4C55EV273078').success(function(resp) {
    $scope.battery = resp;
  });
  $scope.honkHorn = function() {
    RestServe.honkHorn('WBY1Z4C55EV273078').success(function(resp) {
      console.log(resp);
    }).error(function(resp) {
      console.log(resp);
    });
  };

  $scope.headlights = function() {
    console.log('hi');
    RestServe.turnOnHeadlights('WBY1Z4C55EV273078');
    //RestServe.turnOnHeadlights('WBY1Z4C51EV275894');
    //RestServe.turnOnHeadlights('WBY1Z4C58EV275200');
  };

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.changeNav = function() {
    console.log('hi');
    $state.go('app.playlists');
  };

  $scope.goToReview = function() {
    $state.go('app.review');
  }

  $scope.findVehicles = function() {
    RestServe.vehicles().success(function(resp) {
      RestServe.getLocation(resp[0].vin).success(function(response) {
        $scope.location1 = new google.maps.LatLng(response.lat,response.lon);
        var regLocation1 = new google.maps.Marker({
          position: $scope.location1,
          map: $scope.map,
          title: 'hello'
        });
        google.maps.event.addListener(regLocation1, 'click', function() {
          $scope.displayLoc = $scope.location1;
          $scope.changeNav();
        });
      });
    });
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });


    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
}).controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.rental = {};
    $scope.rental.number = 0;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    }
  })

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  });
