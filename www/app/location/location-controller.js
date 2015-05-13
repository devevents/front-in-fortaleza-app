angular.module('confboilerplate.location.controllers')

.controller('LocationCtrl', function($scope, $http, Location, $ionicLoading) {
  $scope.location = [];
  $ionicLoading.show({
    template: 'Loading...'
  });

  Location.get()
  .then(function(location){
    $scope.location = location;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.$on('mapInitialized', function(map) {
    $scope.map = map;
  });
});
