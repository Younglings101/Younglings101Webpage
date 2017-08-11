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
// .directive('card', function() {
//     return {
//         restrict: 'E',
//         template: "<li class='col-xs-4'><figure class='younglings'><img src='{{}}' alt='a picture' class='img-responsive'/><figcaption><h3>{{name}} <span>{{surname}}</span></h3></figcaption></figure></li>"
//     };
// })
.controller('randomiser', function(){
    var links = [{"name":"Ernst", "surname":"Kaese", "link":"#!ernst","src":"../pages/younglingsProfilesSites/ernst/img/faceshot.jpg"}, {"name":"Malcolm", "surname":"TBD", "link":"#!malcolm","src":"../pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg"}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}, {"name":"", "surname":"", "link":"","src":""}];
    /*
    The carousel has 5 slides containing 3 cards each.
    Each card needs to display random objects from links array.
    Links array can also be a JSON file.
    Use $scope to add data to the card directive.
    */
    links = shuffle(links);
    console.table(links);
})
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