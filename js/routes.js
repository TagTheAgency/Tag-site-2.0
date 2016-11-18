console.log("ran routes.js");

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "partials/home.html"
	})
	.when('/production', {
		templateUrl : "partials/production.html"
	})
	.when('/vr', {
		templateUrl : "partials/vr.html"
	})
	.when('/influencers', {
		templateUrl : "partials/influencers.html"
	})
	.when('/strategy', {
		templateUrl : "partials/strategy.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});