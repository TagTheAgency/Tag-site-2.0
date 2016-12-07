var tagApp = angular.module('tagApp', ['ngRoute', 'ngAnimate']);

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
    .when('/partners', {
        templateUrl : "../pages/partners.html"
    })
    .when('/staff', {
        templateUrl : "../pages/personal.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});

tagApp.controller('mainController', function($scope, $location, $window, dataService, $http) {
    dataService.getStaffBios(function (response) {
        $scope.staffObj = response.data
    })

    dataService.getPartners(function (response) {
        $scope.partnersObj = response.data
    })

    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.openTab = function (url) {
        $window.open(url, '_blank');
    }

    $scope.getCurrentObj =function (object, $event) {
        // $.each(object, function(i, val) {
            // console.log(val)
          // if (val.id == $scope.object.id) {
            $scope.currentObj = object
          // }
        // });
    }

    $scope.toggleDisplay = function (person, hover, $event) {
        if (hover == true) {
            $($event.target).css({"background-image": "url(" + person.images[person.images.length -1] + ")"})
        } else if (hover == false) {
            $($event.target).css({"background-image": "url(" + person.images[0] + ")"})
        }
    }

});



angular.module('tagApp')
    .service('dataService', function($http, $q) {
        this.getStaffBios = function(cb) {
          $http({
              url: 'scripts/staff.json', 
              method: "GET"
          }).then(cb)
        };
        this.getPartners = function(cb) {
          $http({
              url: 'scripts/partners.json', 
              method: "GET"
          }).then(cb)
        };
    })