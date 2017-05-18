var app = angular.module('divApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "table.html"
    })
    .when("/company/:companyID", {
        templateUrl : "company.html",
        controller : "compCtrl"
    });
});

app.controller('divCtrl', function ($scope, $http) {
    $http.get('datatable1.json').success(function (data) {
        $scope.dividends = data.dividends2017;
    });       
});

app.controller('div2017Ctrl', function ($scope, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividends2017 = data.dywidendy2017;
    });       
});

app.controller('compCtrl', function ($scope, $routeParams, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividend = data.dywidendy2017[$routeParams.companyID];
    });

});
