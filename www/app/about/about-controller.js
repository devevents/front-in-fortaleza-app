angular.module('confboilerplate.about.controllers')

.controller('AboutCtrl', function($scope, $http, About, $ionicLoading) {
  $scope.about = [];
  $ionicLoading.show({
    template: 'Loading...'
  });

  About.get()
  .then(function(about){
    $scope.about = about;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
});
