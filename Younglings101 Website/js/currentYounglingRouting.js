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
        template: "<li class='col-xs-4'><figure class='younglings'><img src='http://via.placeholder.com/350x500' alt='a picture' class='img-responsive'/><figcaption><h3>{{name}} <span>{{surname}}</span></h3></figcaption></figure></li>"
    };
})
.controller('randomiser', function(){
    var links = [{"name":"Ernst", "surname":"Kaese", "link":"#!ernst","src":"../pages/younglingsProfilesSites/ernst/img/faceshot.jpg"}, {"name":"Malcolm", "surname":"TBD", "link":"#!malcolm","src":"../pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg"}];
    /*
    The carousel has 5 slides containing 3 cards each.
    Each card needs to display random objects from links array.
    Links array can also be a JSON file.
    Use $scope to add data to the card directive.
    */
});

