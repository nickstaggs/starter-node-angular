angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.submit = function() {
		console.log("submitted");
		$http.get('/api/nerds').then(function successCallback(response) {
			console.log(response);
			console.log("poop");
		},
		function errorCallback(response) {
			console.log(response);
		});
	}

});
