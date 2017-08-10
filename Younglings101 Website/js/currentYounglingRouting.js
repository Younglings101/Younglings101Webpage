var app = angular.module("route", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "pages/younglingsProfiles.html"
        }).otherwise({
            redirectTo: '/'
        });
}]);