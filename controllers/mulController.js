myApp.controller("mulController", ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.mul = function() {
        $rootScope.message = "Multiplication: ";
        $rootScope.result = $rootScope.numberA * $rootScope.numberB;
    };
  }
]);

// myApp.controller("sumController", ["$scope", "$rootScope", function($scope, $rootScope) {
//   $scope.sum = function() {
//       $rootScope.message = "Summation: ";
//       $rootScope.result = $rootScope.numberA + $rootScope.numberB;
//   };
// }
// ]);

