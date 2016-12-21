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
    .when('/what', {
        templateUrl : "../pages/what.html",
    })
    .when('/how', {
        templateUrl : "../pages/how.html",
    })
    .when('/contact', {
        templateUrl : "../pages/contact.html",
    })
    .otherwise({
        redirectTo: '/'
    });
});

tagApp.controller('mainController', function($scope, $location, $window, dataService, $http) {
    $scope.hideCopy = true
    // $scope.what_imagurl

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

    $scope.addActiveClass = function(class_name, $event) {
        $('.' + $event.target.classList[0]).removeClass(class_name)
        $($event.target).addClass(class_name)
    }

    $scope.getCurrentObj =function (object, $event) {
            $scope.currentObj = object
    }

    $scope.toggleDisplay = function (person, hover, $event) {
        if (hover == true) {
            $($event.target).css({"background-image": "url(" + person.images[person.images.length -1] + ")"})
        } else if (hover == false) {
            $($event.target).css({"background-image": "url(" + person.images[0] + ")"})
        }
    }

    $scope.sendEmail = function () {
        var data = {
            name: $(".contact-form__input--name").val(),
            email: $(".contact-form__input--email").val(),
            phone: $(".contact-form__input--phone").val(),
            message: $(".contact-form__input--message").val()
        };
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: data,
            success: function(){
                console.log('success!!!!!')
            }
        });
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