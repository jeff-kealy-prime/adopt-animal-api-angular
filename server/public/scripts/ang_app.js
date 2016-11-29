var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'homeController'
        })
        .when('/horse', {
            templateUrl: '/views/templates/horse.html',
            controller: 'HorseController',
            controllerAs: 'hc'
        })
        .when('/pig', {
            templateUrl: '/views/templates/pig.html',
            controller: 'PigController',
            controllerAs: 'pc'
        })
        .when('/reptile', {
            templateUrl: '/views/templates/reptile.html',
            controller: 'ReptileController',
            controllerAs: 'rc'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
