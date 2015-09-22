var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider',
	function($routeProvider){
    $routeProvider.when('/', {
			templateUrl: 'top.html'
		})
    .when('/youtube/', {
			templateUrl: 'youtube.html',
			controller: 'youTubeController'
		})
		.when('/youtube/list/', {
			templateUrl: 'youtube-list.html',
			controller: 'youTubeListController'
		})
		.when('/zipcode/', {
			templateUrl: 'zipcode.html',
			controller: 'zipCodeController'
		})
		.when('/zipcode/detail/:zipcode/', {
			templateUrl: 'zipcode-detail.html',
			controller: 'zipCodeDetailController'
		})
}]);

myApp.constant('API-KEY', {
    youtube: 'AIzaSyCWHHlM3Ec10EsgT4oqUQTXWjt0q3hgz9g'
});
