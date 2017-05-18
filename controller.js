var app = angular.module('divApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "table.html"
    })
    
    /*
    .when("/company/:companyID", {
        templateUrl : "company.html",
        controller : "compCtrl"
    });
});
*/
   .when("/dywidenda2017/:company", {
        templateUrl : "company.html",
        controller : "compCtrl"
    });
});
    
app.controller('div2017Ctrl', function ($scope, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividends2017 = data.dywidendy2017;
    });       
});
/*
app.controller('compCtrl', function ($scope, $routeParams, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividend = data.dywidendy2017[$routeParams.companyID];
    });

});
*/

app.controller('compCtrl', function ($scope, $routeParams, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividend = data.dywidendy2017[$routeParams.company];
    });

});
