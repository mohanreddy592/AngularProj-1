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
    
    $scope.imagesURLs = [
        'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2018/compass-mp/gallery/interior/2018-Jeep-Compass-VLP-Gallery-Exterior-01.jpg.image.1440.jpg',
        'https://auto.ndtvimg.com/car-images/gallery/jeep/compass/exterior/jeep-compass-rear-side-view.jpg?v=2017-07-31',
        'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2017/compass-mp/gallery/exterior/2017-Jeep-Compass-VLP-Gallery-Trailhawk-Side-Profile.jpg.image.1440.jpg',
        'http://cdn1.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/2017/06/170606_jeep-compass_10.jpg?itok=7WRq_ZY5',
        'http://cdn2.alphr.com/sites/alphr/files/styles/16x9_860/public/2017/06/jeep_compass_review_2017_main.jpg?itok=251syBTy'
    ];
    $scope.index = 0;
    //$scope.firstImg = 'https://auto.ndtvimg.com/car-images/gallery/jeep/compass/exterior/jeep-compass-front-profile.jpg?v=2017-07-31';
    //$scope.firstImg = imagesURLs[index];

    $scope.increaseIndex = function() {
        if($scope.index === $scope.imagesURLs.length-1) {
            $scope.index = 0;
        } else {
            $scope.index = $scope.index + 1;        
        }
    }
    
    $scope.decreaseIndex = function() {
        if($scope.index === 0) {
            $scope.index = $scope.imagesURLs.length-1
        } else {
            $scope.index = $scope.index - 1;        
        }
    }

    $scope.first;
    $scope.second;
    $scope.result;
    $scope.isCalculated = false;
    $scope.calculate = function(action) {
        if(action === 'add') {
            console.log('adding two values');
            $scope.result = $scope.first + $scope.second;
        } else if(action === 'sub') {
            console.log('substracting two values');
            $scope.result = $scope.first - $scope.second;
        } else if(action === 'mul') {
            console.log('multiplying two values');
            $scope.result = $scope.first * $scope.second;
        } else if(action === 'div') {
            console.log('divisioning two values');
            $scope.result = $scope.first / $scope.second;
        } else {
            console.log('No function available');
        }
        $scope.isCalculated = true;
    }
    $scope.onInputChange = function() {
        $scope.isCalculated = false;
    }
});

// custom components will have template, templateUrl, bindings
myapp.component('myCustomCalculator', {
    templateUrl: 'calculator-template.html',
    controller:'MyCustomCalculatorCtrl',
    bindings: {
        resultText: '@'
    }
});

myapp.controller('MyCustomCalculatorCtrl', function(){
    this.first;
    this.second;
    this.result;
    this.isCalculated = false;
    this.calculate = function(action) {
        if(action === 'add') {
            console.log('adding two values');
            this.result = this.first + this.second;
        } else if(action === 'sub') {
            console.log('substracting two values');
            this.result = this.first - this.second;
        } else if(action === 'mul') {
            console.log('multiplying two values');
            this.result = this.first * this.second;
        } else if(action === 'div') {
            console.log('divisioning two values');
            this.result = this.first / this.second;
        } else {
            console.log('No function available');
        }
        this.isCalculated = true;
    }
    this.onInputChange = function() {
        this.isCalculated = false;
    }
});