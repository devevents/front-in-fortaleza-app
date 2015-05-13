angular.module('confboilerplate.speakers.controllers')

.controller('SpeakersCtrl', function($scope, $http, Speakers, $ionicLoading) {
  $scope.speakers = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Speakers.get()
  .then(function(speakers){
    $scope.speakers = speakers;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
});
