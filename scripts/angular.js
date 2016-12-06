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

    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.openTab = function (url) {
        $window.open(url, '_blank');
    }

    $scope.getCurrentStaffObj =function ($event) {
        staff_id = $event.target.dataset.id
        $.each($scope.staffObj, function(i, val) {
          if (val.id == staff_id) {
            $scope.current_staff = val
          }
        });
    }

    $scope.partnersObj = {
        haeberlin: {
            logo: 'https://1793699979.rsc.cdn77.org/partners/haeberlin/logo.png'
        },
        matai: {
            logo: 'https://1793699979.rsc.cdn77.org/partners/matai/logo.png'
        },
        syengage: {
            logo: 'https://1793699979.rsc.cdn77.org/partners/sy-engage/logo.png'
        }
    }

    $scope.toggleDisplay = function (person, hover, $event) {
        if (hover == true) {
            $($event.target).css({"background-image": "url(" + person.images[person.images.length -1] + ")"})
        } else if (hover == false) {
            console.log('leave')
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
    })