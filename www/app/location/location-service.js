angular.module('confboilerplate.location.services')

.service('Location', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/front-in-fortaleza-app/data/location.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
});
