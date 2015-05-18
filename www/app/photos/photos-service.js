angular.module('confboilerplate.photos.services')

.service('Photos', function ($http) {

	var config = {
		url: 'https://api.instagram.com/v1',
		client_id: '9f02a975012347d99daf55b3507b4f07',
		count: 20
	};

	return {
		fetch: function(url) {
			url = url || config.url + '/tags/frontinfortaleza/media/recent';
			var params = {
				'params': {
					'client_id': config.client_id,
					'count': config.count,
					'callback': 'JSON_CALLBACK'
				}
			};

			return $http.jsonp(url, params);
		},

		getMedia: function(id) {
			var url = config.url + '/media/' + id;
			var params = {
				'params': {
					'client_id': config.client_id,
					'count': config.count,
					'callback': 'JSON_CALLBACK'
				}
			};

			return $http.jsonp(url, params);
		}
	};
});
