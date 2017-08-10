var app = angular.module("main", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "pages/younglingsProfiles.html"
        }).otherwise({
            redirectTo: '/'
        });
}]);