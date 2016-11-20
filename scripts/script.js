var tagApp = angular.module('tagApp', ['ngRoute']);

tagApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'mainController'
        })

        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'mainController'
        });
});

tagApp.controller('mainController', function($scope) {
    // $scope.message = 'Hi';
});