var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', function($scope){
    $scope.title = "AngularJS Training";
    $scope.age = 10;
    $scope.sayHello = function(){
        alert("Hello...!");
    };

    $scope.students = [

        {
            name: "Mohan",
            department: "ITEC",
            dob: "10-08-1999"
        },
        {
            name: "Ram",
            department: "FCC",
            dob: "17-10-2000"
        },
    ];

    $scope.onStudentSelect = function(student) {
        //alert('selected student is ' + student.name);
        //console.log(student);
        $scope.selectedStudent = student;
    };
    
});