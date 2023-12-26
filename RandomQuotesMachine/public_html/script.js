var app = angular.module("app", []);
app.controller("quoteController", function ($scope, $http) {
    $scope.fetchRandomQuote = function () {
        $scope.quoteData = "";
        $scope.loadingQuote = true;
        $http.get("https://api.quotable.io/quotes/random").then(function (response) {
            $scope.loadingQuote = false;
            $scope.quoteData = response.data;
        });
    };
});