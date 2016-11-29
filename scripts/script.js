var tagApp = angular.module('tagApp', ['ngRoute']);

tagApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "../pages/home.html",
    })
    .when('/doing', {
        templateUrl : "../pages/production.html",
    })
    .when('/vr', {
        templateUrl : "../pages/vr.html"
    })
    .when('/influencers', {
        templateUrl : "../pages/influencers.html"
    })
    .when('/thinking', {
        templateUrl : "../pages/strategy.html"
    })
    .when('/done', {
        templateUrl : "../pages/work.html"
    })
    .when('/who', {
        templateUrl : "../pages/who.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});

tagApp.controller('mainController', function($scope, $location, $window) {
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.openTab = function (url) {
        $window.open(url, '_blank');
    }
});