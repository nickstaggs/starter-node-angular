angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	// $http.get('/api/nerds').then(function successCallback(response) {
	// 	console.log(response.data[0].name);
	// 	for (var i in response.data) {
	// 		document.getElementById("Nerd").appendChild("<li>"+response.data[i]+"</li>");
	// 	}
	// },
	// function errorCallback(response) {
	// 	console.log(response);
	// });


});
