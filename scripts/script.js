var tagApp = angular.module('tagApp', ['ngRoute']);

tagApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "../pages/home.html",
    })
    .when('/production', {
        templateUrl : "../pages/production.html",
    })
    .when('/vr', {
        templateUrl : "../pages/vr.html"
    })
    .when('/influencers', {
        templateUrl : "../pages/influencers.html"
    })
    .when('/strategy', {
        templateUrl : "../pages/strategy.html"
    })
    .when('/work', {
        templateUrl : "../pages/work.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});

tagApp.controller('mainController', function($scope, $location) {
    $scope.go = function (path) {
      $location.path(path);
    };
});