var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', function($scope){
    $scope.title = "AngularJS Training";
    $scope.age = 10;
    $scope.sayHello = function(){
        alert("Hello...!");
    };
});