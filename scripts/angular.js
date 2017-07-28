var tagApp = angular.module('tagApp', ['ngRoute', 'ngAnimate']);

tagApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "pages/home.html",
    })
    .when('/doing', {
        templateUrl : "pages/production.html",
    })
    .when('/vr', {
        templateUrl : "pages/vr/vr.html"
    })
    .when('/influencers', {
        templateUrl : "pages/influencers.html"
    })
    .when('/thinking', {
        templateUrl : "pages/strategy.html"
    })
    .when('/done', {
        templateUrl : "pages/done/done.html"
    })
    .when('/done-videos', {
        templateUrl : "pages/done/video.html"
    })
    .when('/done-apps', {
        templateUrl : "pages/done/apps.html"
    })
    .when('/done-brand', {
        templateUrl : "pages/done/brand.html"
    })
    .when('/done-photography', {
        templateUrl : "pages/done/photography.html"
    })
    .when('/done-content', {
        templateUrl : "pages/done/content.html"
    })
    .when('/done-advertising', {
        templateUrl : "pages/done/advertising.html"
    })
    .when('/done-event', {
        templateUrl : "pages/done/event.html"
    })
    .when('/who', {
        templateUrl : "pages/who.html"
    })
    .when('/partners', {
        templateUrl : "pages/partners.html"
    })
    .when('/staff', {
        templateUrl : "pages/personal.html"
    })
    .when('/what', {
        templateUrl : "pages/what.html",
    })
    .when('/how', {
        templateUrl : "pages/how.html",
    })
    .when('/contact', {
        templateUrl : "pages/contact.html",
    })
    .when('/vr-app', {
        templateUrl : "pages/vr/vr-app.html",
    })
    .when('/vr-cardboard', {
        templateUrl : "pages/vr/vr-cardboard.html",
    })
    .otherwise({
        redirectTo: '/'
    });
});

tagApp.controller('mainController', function($scope, $location, $window, dataService, $http) {

    $scope.hideCopy = true

    dataService.getStaffBios(function (response) {
        $scope.staffObj = response.data
    })

    dataService.getPartners(function (response) {
        $scope.partnersObj = response.data
    })

    $scope.setHeaderTheme = function (theme) {
        if (theme == 'dark') {
            $('.nav-top').removeClass('nav-top--light')
            $('.nav-top').addClass('nav-top--dark')
            $('.nav-top__logo').removeClass('nav-top__logo--light')
            $('.nav-top__logo').addClass('nav-top__logo--dark')
            $('.nav-top__burger-icon').attr('ng-class', "show_header_menu ? 'nav-top__burger-icon nav-top__burger-icon--dark nav-top__burger-icon--active' : 'nav-top__burger-icon nav-top__burger-icon--dark'")
        } else {
            $('.nav-top').addClass('nav-top--light')
            $('.nav-top').removeClass('nav-top--dark')
            $('.nav-top__logo').removeClass('nav-top__logo--dark')
            $('.nav-top__logo').addClass('nav-top__logo--light')
            $('.nav-top__burger-icon').attr('ng-class', "")
        }
    }

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

    $scope.changeVrImage = function($event) {
        if($('.media img')[0].src.includes('phone')) {
            $('.media img').attr('src', 'imgs/carboard.png');
        } else {
            $('.media img').attr('src', 'imgs/phone.png');
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
            url: "scripts/mail.php",
            data: data,
            success: function(){
                $('.contact-form__submit').addClass('contact-form__submit--after')
                $('.contact-form__submit').text('Thanks!')
            }
        });
        return false;
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