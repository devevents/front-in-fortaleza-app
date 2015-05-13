angular.module('confboilerplate.sponsors.controllers')

.controller('SponsorsCtrl', function($scope, Sponsors, $ionicLoading) {
  $scope.sponsors = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Sponsors.get()
  .then(function(sponsors){
    $scope.sponsors = sponsors;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
  
  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }  
});
