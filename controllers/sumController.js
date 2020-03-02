myApp.controller("sumController", ["$scope", function($scope) {
    $scope.sum = function() {
        $scope.message = "Summation: ";
        $scope.result = $scope.numberA + $scope.numberB;
    };
  }
]);
