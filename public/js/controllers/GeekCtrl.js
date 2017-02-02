angular.module('GeekCtrl', []).controller('GeekController', function($scope, $http) {

	// var mongoose = require('mongoose');
	// var db = require('./config/db.js');
	// mongoose.connect(db.url);
	// var nerd = mongoose.model("Nerd", { name: String });

	$scope.tagline = 'The square root of life is pi!';
	$scope.title = "Geek Cities";

	$scope.submit = function() {
		if ($scope.formData) {
			var stuff = $scope.formData.text;
			console.log(stuff);
			$http.post('/api/nerds', stuff).then(function successCallback(response) {
				console.log(response);
				$scope.formData.text = "";
			},
		function errorCallback(response) {
			console.log(response);
		});
	// 	$http({
  //   method: 'POST',
  //   url: '/api/nerds',
  //   data: $scope.text,
  //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //   transformRequest: function(obj) {
  //     var str = [];
  //     for(var p in obj)
  //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //     return str.join("&");
  //   }
  // }).then(function successCallback(response) {
	// 	console.log("success");
	// },
	// function errorCallback(response) {
	// 	console.log(response);
	// });
		}
	};
});
