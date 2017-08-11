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
.controller('randomiser', ['$scope', function($scope) {
    $scope.links = [{"name":"Ernst", "surname":"Kaese", "link":"#!ernst","src":"../pages/younglingsProfilesSites/ernst/img/faceshot.jpg"}, {"name":"Malcolm", "surname":"Carelse", "link":"#!malcolm","src":"../pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}, {"name":"", "surname":"", "link":"","src":"http://via.placeholder.com/350x500"}];
    links = shuffle($scope.links);
}])
.directive('carousel', function(){
        return{
            restrict: "E",
            templateUrl: "../pages/younglingsProfilesSites/carousel.html"
        };
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}