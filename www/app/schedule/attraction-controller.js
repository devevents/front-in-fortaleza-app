angular.module('confboilerplate.schedule.controllers')

.controller('AttractionCtrl', function($scope, Schedule, $stateParams, $ionicLoading) {
  var attractionId = $stateParams.attractionId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Schedule.getAttraction(attractionId)
  .then(function(attraction){
    $scope.attraction = attraction;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.shareAttraction = function(attraction){
    var speakersText = "";

    _.each(attraction.speakers, function(speaker, index){
      speakersText += speaker.name;
      if((index+1) < attraction.speakers.length){
        speakersText += " & ";
      }
    });

    var message = "Enjoying " + attraction.title + " by " + speakersText + " at #MyConf";
    window.plugins.socialsharing.share(message);
  };

});
