var app = angular.module("main", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/ernst", {
        templateUrl: "../pages/younglingsProfilesSites/ernst/index.html"
    })
    .when("/malcolm", {
        templateUrl: "../pages/younglingsProfilesSites/malcolm/malcolmyoungling.html"
    })
    .otherwise({
        template: ""
    });
})
.directive('card', function() {
    return {
        restrict: 'E',
        template: "<li class='col-xs-4'><figure class='younglings'><img src='http://via.placeholder.com/350x500' alt='a picture' class='img-responsive'/><figcaption><h3>Name <span>Surname</span></h3></figcaption></figure></li>"
    };
})
.controller('randomiser', function(){
    var links = [["#!ernst","../pages/younglingsProfilesSites/ernst/img/faceshot.jpg"], ["#!malcolm","../pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg"]];
    return links[Math.random*links.length];
});

