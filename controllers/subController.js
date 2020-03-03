myApp.controller("subController", ["$scope", "$rootScope", function($scope, $rootScope) {
  // $scope.num = 14;
    $scope.sub = function() {
        $rootScope.message = "Subtraction: ";
        $rootScope.result = $rootScope.numberA - $rootScope.numberB;
    };
  }
]);

