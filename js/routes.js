var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "/home-refactor.html"
	})
	.when('/production', {
		templateUrl : "production.html"
	})
	.when('/vr', {
		templateUrl : "vr.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});