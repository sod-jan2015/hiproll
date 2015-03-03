'use strict';

// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
//]).
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);

var app = angular.module('hipApp',[]);

app.controller('roomCtrl',['$scope','$http',function($scope,$http){
    $http.get('http://127.0.0.1:1337/hipchat/rooms/').success(function(data){
        $scope.rooms = data;
    });
}]);

app.controller('hiprollCtrl',['$scope','$http',function($scope,$http){
    $http.get('http://127.0.0.1:1337/hipchat/hiproll/').success(function(data){
        $scope.hiproll = data;
    });
}]);