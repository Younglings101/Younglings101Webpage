var app = angular.module("main", [])
    .controller('randomiser', ['$scope', '$sce', function ($scope, $sce) {
        $scope.links = [{ "name": "Ernst", "surname": "Kaese", "link": "../pages/younglingsProfilesSites/ernst/index.html", "src": "../pages/younglingsProfilesSites/ernst/img/faceshot.jpg" }, { "name": "Malcolm", "surname": "Carelse", "link": "../pages/younglingsProfilesSites/malcolm/malcolmyoungling.html", "src": "../pages/younglingsProfilesSites/malcolm/IMG_20170624_130227.jpg" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }, { "name": "", "surname": "", "link": "", "src": "http://via.placeholder.com/350x350" }];
        links = shuffle($scope.links);

        $scope.currentUrl = "";
        $scope.setCurrentUrl = function (url) {
            $scope.currentUrl = url;
        }

        $scope.getUrl = function () {
            console.log($scope.currentUrl);
            return $sce.trustAsResourceUrl($scope.currentUrl);
        }
    }]);

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

function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}