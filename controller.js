var app = angular.module('divApp', []);
app.controller('div2017Ctrl', function ($scope, $http) {
    $http.get('dywidendy2017.json').success(function (data) {
        $scope.dividends = data.dywidendy2017;
    });       
});
