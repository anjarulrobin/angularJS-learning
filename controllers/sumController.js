myApp.controller("sumController",["$scope",  "Calculation", "$rootScope", function($scope, Calculation ,$rootScope ) {
    $scope.sum = function() {
        $rootScope.message = "Summation: ";
        // $rootScope.result = $rootScope.numberA+$rootScope.numberB;
        $rootScope.result = Calculation.addition($rootScope.numberA, $rootScope.numberB);
    };
  }
]);
