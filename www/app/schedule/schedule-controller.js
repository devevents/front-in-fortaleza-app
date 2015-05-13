angular.module('confboilerplate.schedule.controllers')

.controller('ScheduleCtrl', function($scope, Schedule, $ionicLoading) {
  $scope.attractions = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Schedule.get()
  .then(function(attractions){
    $scope.attractions = attractions;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
});
