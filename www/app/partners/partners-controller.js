angular.module('confboilerplate.partners.controllers')

.controller('PartnersCtrl', function($scope, $http, Partners, $ionicLoading) {
  $scope.partners = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Partners.get()
  .then(function(partners){
    $scope.partners = partners;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
});
