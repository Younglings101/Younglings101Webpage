var app = angular.module('main', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'C:\Users\Ernst\Documents\GitHub\Younglings101Webpage\Younglings101 Website\socialMedia\twitter.html'
    })
    .when('/facebook', {
        templateUrl: 'C:\Users\Ernst\Documents\GitHub\Younglings101Webpage\Younglings101 Website\socialMedia\facebook.html'
    })
    .when('/instagram', {
        templateUrl: 'C:\Users\Ernst\Documents\GitHub\Younglings101Webpage\Younglings101 Website\socialMedia\instagram.html'
    })
    .when('/youtube', {
        templateUrl: 'C:\Users\Ernst\Documents\GitHub\Younglings101Webpage\Younglings101 Website\socialMedia\youtube.html'
    })
    .when('/linkedin', {
        templateUrl: 'C:\Users\Ernst\Documents\GitHub\Younglings101Webpage\Younglings101 Website\socialMedia\linkedin.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);