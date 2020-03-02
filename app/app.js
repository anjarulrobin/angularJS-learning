var myApp = angular.module('myApp', []);

/*myApp.controller('myController',["$scope", function($scope){   

    $scope.sum = function(){
        if(typeChecking() == true){
            $scope.message = "Summation: ";
            var numberA = convertIntoNumber($scope.numberA);
            var numberB = convertIntoNumber($scope.numberB);
            $scope.result = numberA+numberB;
        }else
            $scope.message = "Please give a valid number";
    }
    $scope.subtract = function(){
        if(typeChecking() == true){
            $scope.message = "Subtraction: ";
            var numberA = convertIntoNumber($scope.numberA);
            var numberB = convertIntoNumber($scope.numberB);
            $scope.result = numberA-numberB;
        }else
            $scope.message = "Please give a valid number";
    }
    $scope.multiply = function(){
        if(typeChecking() == true){
            $scope.message = "Multiplication: ";
            var numberA = convertIntoNumber($scope.numberA);
            var numberB = convertIntoNumber($scope.numberB);
            $scope.result = numberA*numberB;
        }else
           $scope.message = "Please give a valid number";
    }
    $scope.divide = function(){
        if(typeChecking() == true){
            $scope.message = "Division: ";
            var numberA = convertIntoNumber($scope.numberA);
            var numberB = convertIntoNumber($scope.numberB);
            $scope.result = numberA/numberB;
        }else
            $scope.message = "Please give a valid number";  
    }

    function typeChecking(){
        var numberA = convertIntoNumber($scope.numberA);
        var numberB = convertIntoNumber($scope.numberB);
        if(isNaN(numberA) || isNaN(numberB))
            return false;        
        else
            return true;
    }
    function convertIntoNumber(number){
        return Number(number);
    }
}]);*/
