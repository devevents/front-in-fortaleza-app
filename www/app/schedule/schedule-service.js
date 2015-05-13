angular.module('confboilerplate.schedule.services')

.service('Schedule', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/schedule.json')
    .success(function(data) {

      var day1 = _.filter(data, function(attraction){ return attraction.date =="day1" }),
          day2 = _.filter(data, function(attraction){ return attraction.date =="day2" });

      dfd.resolve({
        "day1": day1,
        "day2": day2
      });
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };

  this.getAttraction = function(attractionId){
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/schedule.json')
    .success(function(data) {
      var attraction = _.find(data, {id: attractionId});
      dfd.resolve(attraction);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
});
