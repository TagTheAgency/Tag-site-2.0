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
    .when('/partners', {
        templateUrl : "../pages/partners.html"
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
    
    $scope.staffObj = {
        jess: {
            name: 'Jess Bovey',
            thumbnail: 'https://1793699979.rsc.cdn77.org/team-photos/jess/1.jpg',
            role: 'GM Operations'
        },
        jaime: {
            name: 'Jaime Parlett',
            thumbnail: 'https://1793699979.rsc.cdn77.org/team-photos/jaime/1.jpg',
            role: 'Account Director'
        },
        mabel: {
            name: 'Mabel',
            thumbnail: 'https://1793699979.rsc.cdn77.org/team-photos/mabel/1.jpg',
            role: 'Head of Security'
        },
        rosa: {
            name: 'Rosa Santana',
            thumbnail: 'https://1793699979.rsc.cdn77.org/team-photos/rosa/1.jpg',
            role: 'Designer'
        },
        anna: {
            name: 'Anna Vallance',
            thumbnail: '',
            role: 'Account Manager'
        },
        madeline: {
            name: 'Madeline Taylor',
            thumbnail: '',
            role: 'Designer'
        },
        dan: {
            name: 'Dan Harris',
            thumbnail: '',
            role: 'Video Production'
        },
        ira: {
            name: 'Ira Ritchie Meek',
            thumbnail: 'https://1793699979.rsc.cdn77.org/team-photos/ira/1.jpg',
            role: 'Developer'
        },
        tom: {
            name: 'Tom Rediy',
            thumbnail: '',
            role: 'Head of Innovation'
        }
    }


});