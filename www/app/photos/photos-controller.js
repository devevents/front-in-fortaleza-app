angular.module('confboilerplate.photos.controllers')

.controller('PhotosCtrl', function($scope, Photos, $ionicLoading) {
	$scope.photos = [];
	$scope.next_url = '';

	$ionicLoading.show({
		template: 'Carregando...'
	});

	function handlerRequest(response) {
		if (response.data.length >= 1 && response.meta.code === 200) {
			response.data.forEach(function(element) {
				$scope.photos.push(element);
				$scope.next_url = response.pagination.next_url;
				$ionicLoading.hide();
			});
		}
	}

	function errorHandler(error) {
		$scope.error = error;
		$ionicLoading.hide();
		console.log('There was an error:', error);
	}

	Photos.fetch().success(handlerRequest).error(errorHandler);

	$scope.paginationPhotos = function() {
		$ionicLoading.show({
			template: 'Carregando...'
		});

		if ($scope.next_url !== '') {
			Photos.fetch($scope.next_url).success(handlerRequest).error(errorHandler);
		} 
	};
})

.controller('PhotoCtrl', function($scope, Photos, $stateParams, $ionicLoading) {
	$scope.photo;

	$ionicLoading.show({
		template: 'Carregando...'
	});

	// get photo id
	var photo_id = $stateParams.photo_id;

	(function(id) {
		var request = Photos.getMedia(id);
		request.success(function(response) {
			if (response.meta.code === 200 && response.data !== "") {
				$scope.photo = response.data;
				$ionicLoading.hide();
				console.log(response.data);
			}
		}).error(function(error) {
			$scope.error = error;
			$ionicLoading.hide();
			console.log('There was an error:', error);
		});
	})(photo_id);
});